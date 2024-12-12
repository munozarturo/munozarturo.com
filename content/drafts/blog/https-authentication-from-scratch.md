---
title: "https authentication from scratch"
subtitle: "a how to for auth."
date: "2024-10-17T10:04:00"
tags: []
links: []
---



<!-- omit from toc -->
## Table of Contents

- [Introduction](#introduction)
- [Routes](#routes)
  - [`/auth/signup`](#authsignup)
  - [`/auth/verify/request`](#authverifyrequest)
  - [`/auth/verify`](#authverify)
  - [`/auth/signin`](#authsignin)
  - [`/auth/signout`](#authsignout)
  - [`/auth/password/reset/request`](#authpasswordresetrequest)
  - [`/auth/password/reset`](#authpasswordreset)

## Introduction

## Routes

### `/auth/signup`

So, how do we sign a user up provided an email and a password?

1. Validate the email and password against a schema.
2. Hash the password.
3. Check that the email doesn't belong to an existing user.
4. Store the email and hashed password in our database.
5. Return a message with a status code.

```python
def signup(email: str, password: str):
    pass
```

### `/auth/verify/request`

Assuming that we don't trust that an email belongs to someone unless they can prove it, we require that a user verify that they own the email that they signed up with. We do this with a simple email with a "secret" token which is just a random number or string and then require that this token be given to us as proof that the user, at the very least, has access to the email that they signed up with. If the user can prove that they have access to an email we take this as proof of ownership of that email and it becomes our source of truth for that user.

Essentially, this is just a challenge, where we want the user to prove that the email belongs to them.

1. Validate the email against a schema.
2. Generate a cryptographically secure ID for the challenge (so we can identify it later).
3. Generate a cryptographically secure "secret" token for the challenge.
4. Hash the token.
5. Check that the email belongs to an existing user.
   - Check that the user has not been verified.
6. Store the token hash with the challenge ID in our database.
7. Send the user an email with the token.
8. Return a message with a status code and the challenge ID.

```python
def verify_request(email: str):
    pass
```

What we do in this example is we generate a short token in the range [0, 1_000_000], the token can actually be longer (more secure) and instead of sening the user a plaintext token we can send a formatted URL which acts as a magic link and our frontend automatically verifies the user.

### `/auth/verify`

```python
def verify():
    pass
```

### `/auth/signin`

```python
def signin():
    pass
```

### `/auth/signout`

```python
def signout():
    pass
```

### `/auth/password/reset/request`

```python
def password_reset_request():
    pass
```

### `/auth/password/reset`

```python
def password_reset():
    pass
```
