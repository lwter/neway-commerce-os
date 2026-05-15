#!/usr/bin/env python3

from __future__ import annotations

import sys
from pathlib import Path


REQUIRED_FILES = [
    "package.json",
    "index.html",
    "src/main.tsx",
    "src/App.tsx",
    "src/styles.css",
    "src/components/AiConcierge.tsx",
    "src/pages/HomePage.tsx",
    "src/pages/CartPage.tsx",
    "src/pages/CheckoutPage.tsx",
    "src/pages/AccountPage.tsx",
    "src/pages/AdminPage.tsx",
    "functions/api/products.ts",
    "functions/api/checkout.ts",
    "functions/api/assistant.ts",
    "functions/node/stripe-webhook.ts",
    ".env.example",
    "edgeone.json",
]


PLACEHOLDERS = [
    "__SITE_NAME__",
    "__BRAND_NAME__",
    "__SITE_SLUG__",
    "__PROMPT__",
]


def validate_project(project_dir: Path) -> tuple[bool, list[str]]:
    errors: list[str] = []

    for rel in REQUIRED_FILES:
        target = project_dir / rel
        if not target.exists():
            errors.append(f"Missing required file: {rel}")

    for file_path in project_dir.rglob("*"):
        if not file_path.is_file():
            continue
        try:
            content = file_path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for token in PLACEHOLDERS:
            if token in content:
                errors.append(f"Unreplaced placeholder {token} in {file_path.relative_to(project_dir)}")

    return (len(errors) == 0, errors)


def main() -> None:
    if len(sys.argv) != 2:
        print("Usage: python validate_generated_project.py <project_dir>")
        raise SystemExit(1)

    project_dir = Path(sys.argv[1]).resolve()
    if not project_dir.exists():
        print(f"Project not found: {project_dir}")
        raise SystemExit(1)

    ok, errors = validate_project(project_dir)
    if ok:
        print("[OK] Generated project passed validation")
        raise SystemExit(0)

    print("[FAIL] Generated project validation failed")
    for error in errors:
        print(f"- {error}")
    raise SystemExit(1)


if __name__ == "__main__":
    main()
