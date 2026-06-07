#!/usr/bin/env python3
"""
Custom HTTP server untuk Edukasa.id local development.
Mendukung clean URL tanpa ekstensi .html
+ endpoint POST /api/save-db untuk auto-save db.js
"""

import http.server
import os
import json
import urllib.parse

PORT = int(os.environ.get("PORT", 8080))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DB_FILE = os.path.join(DIRECTORY, "assets", "db.js")

ROUTES = {
    "/":                        "index.html",
    "/verifikasi-sertifikat":   "verifikasi-sertifikat/index.html",
    "/admin":                   "admin/index.html",
}

VERIFIKASI_PREFIX = "/verifikasi-sertifikat/"


def build_db_js(data):
    """Generate konten db.js dari array data sertifikat."""
    from datetime import datetime
    timestamp = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    json_data = json.dumps(data, indent=4, ensure_ascii=False)
    return f"""// ============================================================
// EDUKASA.ID - DATABASE SERTIFIKAT
// Terakhir diupdate: {timestamp}
// ============================================================

function generateID() {{
    var ts = Date.now().toString();
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var mid = '';
    for (var i = 0; i < 16; i++) mid += chars[Math.floor(Math.random() * chars.length)];
    var suffix = '';
    for (var i = 0; i < 6; i++) suffix += upper[Math.floor(Math.random() * upper.length)];
    return (ts + mid + suffix).substring(0, 35);
}}

var SERTIFIKAT_DATA = {json_data};

var DB_BY_NOMOR = {{}};
var DB_BY_ID    = {{}};
SERTIFIKAT_DATA.forEach(function(s) {{
    DB_BY_NOMOR[s.noSertifikat] = s;
    DB_BY_ID[s.id]              = s;
}});
"""


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path.rstrip("/") or "/"

        if path in ROUTES:
            self.serve_file(ROUTES[path])
            return

        if path.startswith(VERIFIKASI_PREFIX):
            slug = path[len(VERIFIKASI_PREFIX):].split("/")[0]
            file_path = os.path.join("verifikasi-sertifikat", slug + ".html")
            if os.path.exists(os.path.join(DIRECTORY, file_path)):
                self.serve_file(file_path)
                return
            else:
                # Slug tidak ada sebagai file — serve index.html (SPA style)
                self.serve_file("verifikasi-sertifikat/index.html")
                return

        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/save-db":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length)
            try:
                data = json.loads(body)
                content = build_db_js(data)
                with open(DB_FILE, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"  [AUTO-SAVE] db.js diperbarui — {len(data)} sertifikat")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok", "total": len(data)}).encode())
            except Exception as e:
                print(f"  [ERROR] Gagal menyimpan db.js: {e}")
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode())
            return

        self.send_error(404)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def serve_file(self, relative_path):
        full_path = os.path.join(DIRECTORY, relative_path)
        try:
            with open(full_path, "rb") as f:
                content = f.read()
            self.send_response(200)
            if relative_path.endswith(".html"):
                self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
        except FileNotFoundError:
            self.send_error(404, f"File tidak ditemukan: {relative_path}")

    def log_message(self, format, *args):
        print(f"  {self.address_string()} - {format % args}")


if __name__ == "__main__":
    with http.server.HTTPServer(("0.0.0.0", PORT), CleanURLHandler) as httpd:
        print(f"")
        print(f"  Edukasa.id Local Server")
        print(f"  http://localhost:{PORT}")
        print(f"")
        print(f"  Routes:")
        print(f"    http://localhost:{PORT}/                          -> Homepage")
        print(f"    http://localhost:{PORT}/verifikasi-sertifikat     -> Cari sertifikat")
        print(f"    http://localhost:{PORT}/verifikasi-sertifikat/<id>-> Hasil sertifikat")
        print(f"    http://localhost:{PORT}/admin                     -> Panel admin")
        print(f"")
        print(f"  API:")
        print(f"    POST /api/save-db  -> Auto-save db.js (dipanggil otomatis dari admin)")
        print(f"")
        print(f"  Tekan Ctrl+C untuk stop")
        print(f"")
        httpd.serve_forever()
