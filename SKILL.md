---
name: neway-commerce-os
description: generate, scaffold, build, and prepare deployment for a reusable react + vite + hono commerce operating system focused on digital products, storefronts, subscriptions, ai-assisted sales, admin dashboards, and international stripe-style payments. use when the user wants a complete website skeleton from a short prompt, especially for ecommerce launches, creator stores, productized services, multi-product studios, or newaystudio-style product matrices with edgeone pages deployment and full-stack edge functions.
---

# Neway Commerce OS

## Overview

Generate a full-stack commerce website skeleton from a short product idea. The default output is a React + Vite storefront with Hono-powered Edge Functions, a Stripe-style checkout layer, product catalog, cart, AI sales assistant (导购), admin dashboard, mock-to-live payment switching, and EdgeOne Pages deployment files.

This Skill provides a reusable site OS skeleton ready for further implementation.

## Workflow

1. Normalize the prompt into a product brief.
2. Decide the business mode (studio matrix for multi-product NewayStudio brands by default).
3. Generate the system blueprint.
4. Materialize the project from templates.
5. Wire configuration, providers, and content.
6. Run build validation.
7. Prepare deployment artifacts and handoff notes.

## Default Stack

- Frontend: React + Vite + TypeScript with ui-ux-pro enhancements for light animations and modern layout
- API: Hono for Edge Functions and Node Functions
- Payment: Stripe (mock and live)
- Auth: email/password, magic-link ready
- Deployment: EdgeOne Pages

## Output Contract

Generated projects must include a complete frontend and backend skeleton, AI sales assistant integration, product catalog, cart, checkout, admin dashboard, and deployment configuration.

## Usage

When the user asks for an ecommerce launch, digital product storefront, creator store, paid product matrix, NewayStudio style product system, or EdgeOne Pages deployable commerce site, scaffold a complete React + Vite + Hono project from templates/base.

Always explain which integrations are mocked and which production services must be connected.
