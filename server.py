#!/usr/bin/env python3
"""
Custom HTTP server untuk Edukasa.id local development.
Mendukung clean URL tanpa ekstensi .html
"""

import http.server
import os
import urllib.parse

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Mapping clean URL -> file path relatif terhadap DIRECTORY
ROUTES = {
    "/":                        "index.html",
    "/verifikasi-sertifikat":   "verifikasi-sertifikat/index.html",
}

# Semua sub-path di bawah /verifikasi-sertifikat/ dilayani dari folder yang sama
VERIFIKASI_PREFIX = "/verifikasi-sertifikat/"


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path.rstrip("/") or "/"

        # Cek exact route dulu
        if path in ROUTES:
            self.serve_file(ROUTES[path])
            return

        # Handle /verifikasi-sertifikat/<hash>
        if path.startswith(VERIFIKASI_PREFIX):
            slug = path[len(VERIFIKASI_PREFIX):]
            # Jika ada sub-path tambahan, ambil bagian pertama saja
            slug = slug.split("/")[0]
            file_path = os.path.join("verifikasi-sertifikat", slug + ".html")
            if os.path.exists(os.path.join(DIRECTORY, file_path)):
                self.serve_file(file_path)
                return
            else:
                self.send_error(404, "Halaman tidak ditemukan")
                return

        # Fallback: serve file statis (assets, dll)
        super().do_GET()

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
    with http.server.HTTPServer(("", PORT), CleanURLHandler) as httpd:
        print(f"")
        print(f"  Edukasa.id Local Server")
        print(f"  http://localhost:{PORT}")
        print(f"")
        print(f"  Routes:")
        print(f"    http://localhost:{PORT}/                          -> index.html")
        print(f"    http://localhost:{PORT}/verifikasi-sertifikat     -> halaman pencarian")
        print(f"    http://localhost:{PORT}/verifikasi-sertifikat/<hash> -> hasil sertifikat")
        print(f"")
        print(f"  Tekan Ctrl+C untuk stop")
        print(f"")
        httpd.serve_forever()
