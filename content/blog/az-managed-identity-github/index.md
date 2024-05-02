---
title: "Create Azure Managed Identity to use with GitHub"
date: 2024-05-02
tags: ["azure", "Github action"]
summary: "Use Azure Managed Identity to access Azure ressources from GitHub with OpenID Connect (OIDC)"
#layout: simple
---

## Why use Azure managed identity?

The biggest advantage of Azure Managed Identity is that nobody knows the credentials.
We can interpret them as a passwordless method. So we don't need to store secrets as credentials anywhere.

There are some great ressources to learn more about it:
- https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview