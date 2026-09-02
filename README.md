# Crush Digits Website --- Technical Handover

## Overview

This document contains the necessary information for the IT expert or
technical team taking over the Crush Digits website.

## 1. Website Source Code

The accompanying ZIP file contains the complete source code for the
website.

The website was built using:

-   React
-   Vite
-   JavaScript
-   CSS / project-specific frontend dependencies

The project can be installed and run locally using Node.js and npm.

Typical setup:

``` bash
npm install
npm run dev
```

For a production build:

``` bash
npm run build
```

------------------------------------------------------------------------

## 2. GitHub Repository

The complete project is also available on GitHub:

https://github.com/huzaifaharain84-ui/crushdigits

The repository can be cloned using:

``` bash
git clone https://github.com/huzaifaharain84-ui/crushdigits.git
```

------------------------------------------------------------------------

## 3. Current Deployment

The website is currently deployed on Vercel and can be accessed at:

https://crushdigits.vercel.app

The existing Vercel deployment can continue to be used, or the project
can be deployed under another Vercel account if required.

------------------------------------------------------------------------

## 4. Connecting the Company Domain

The company's own domain can be connected to the website directly
through Vercel.

The IT expert can connect and manage the domain independently by:

1.  Adding the domain to the Vercel project.
2.  Updating the required DNS records with the domain provider.
3.  Verifying that the domain points correctly to the Vercel deployment.

Once the DNS configuration has propagated, the website will be
accessible through the company's domain.

------------------------------------------------------------------------

## 5. Contact Form / Form Submission

The website frontend and contact form interface are already included.

However, the actual form submission and email delivery functionality
still needs to be configured after the domain has been connected.

The IT expert may use any suitable email or form-handling service, such
as:

-   Resend
-   Formspree
-   EmailJS
-   SendGrid
-   Any other preferred backend or email service

A recommended approach would be to use a service such as Resend together
with environment variables configured securely in Vercel.

The final implementation should:

-   Receive enquiries submitted through the website.
-   Validate the submitted form data.
-   Forward the enquiry to the appropriate company email address.
-   Configure the sender domain after the company domain has been
    connected.
-   Use the customer's submitted email as the Reply-To address where
    appropriate.
-   Keep API keys and credentials securely stored as Vercel environment
    variables.

------------------------------------------------------------------------

## Summary

  ---------------------------------------------------------------------------------------
  Item                                Details
  ----------------------------------- ---------------------------------------------------
  Framework                           React + Vite

  Source Code                         Included in accompanying ZIP file

  GitHub Repository                   https://github.com/huzaifaharain84-ui/crushdigits

  Current Deployment                  https://crushdigits.vercel.app

  Hosting Platform                    Vercel

  Custom Domain                       Can be connected by the company's IT expert

  Form Submission                     Requires final email/backend integration after
                                      domain connection
  ---------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Handover Notes

The website is complete and currently live on Vercel. The main remaining
technical task is connecting the company's domain and configuring the
contact form submission/email delivery system.

The IT expert is free to use their preferred infrastructure and email
provider for the form submission functionality.
