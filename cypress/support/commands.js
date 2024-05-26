// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// const { google } = require('googleapis');
// const fs = require('fs-extra');

// Cypress.Commands.add('getOTPFromGmail', () => {
//   // Load the JSON key file containing the service account credentials
//   const keyFilePath = '../credentials.json';
//   const credentials = fs.readJsonSync(keyFilePath);

//   // Create an OAuth2 client using the loaded credentials
//   const authClient = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: credentials.client_email,
//       private_key: credentials.private_key,
//     },
//     scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
//   });

//   // Obtain an access token
//   return authClient.getAccessToken()
//     .then((accessToken) => {
//       // Use the access token to authenticate requests to the Gmail API
//       const gmail = google.gmail({ version: 'v1', auth: authClient });

//       // Fetch emails from Gmail inbox
//       return gmail.users.messages.list({
//         userId: 'me',
//         q: 'subject: Verify your new Amazon account'
//         // Add filters to retrieve emails containing the OTP
//         // For example, you can filter by subject or sender
//         // Example: q: 'subject:Your OTP' or q: 'from:your-email@example.com'
//       });
//     })
//     .then((response) => {
//       // Parse the content of the fetched emails to extract the OTP
//       // Implement your logic to extract the OTP from the email content
//       // For example, you can use regular expressions or string manipulation to find the OTP
//       const otp = '123456'; // Replace with extracted OTP
//       return otp;
//     });
// });
