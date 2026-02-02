# Google Apps Script Setup for Nexverra Contact Form

Follow these steps to set up the backend on Google Sheets.

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com).
2. Create a generic **Blank spreadsheet**.
3. Name it "Nexverra Inquiries" (or anything you like).
4. Rename the first sheet tab to `Sheet1` (it should be distinct, usually it is by default).
5. In the first row, add these headers:
   - **Column A**: Date
   - **Column B**: First Name
   - **Column C**: Last Name
   - **Column D**: Email
   - **Column E**: Phone
   - **Column F**: Message

## 2. Open Apps Script

1. In the Google Sheet, go to **Extensions** > **Apps Script**.
2. A new tab will open with a code editor.

## 3. Paste the Code

Delete any existing code in `Code.gs` and paste the following:

```javascript
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // Parse the JSON data sent from the website
    const data = JSON.parse(e.postData.contents);

    // Get current date
    const date = new Date();

    // Append row: [Date, First Name, Last Name, Email, Phone, Message]
    sheet.appendRow([
      date,
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.message || "",
    ]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Data saved successfully",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 4. Deploy as Web App

1. Click the blue **Deploy** button > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. **Description**: "Contact Form API".
4. **Execute as**: `Me` (your email).
5. **Who has access**: **Anyone** (This is crucial so your website can send data without login).
6. Click **Deploy**.
7. Authorize access if prompted (click "Review permissions", pick your account, click "Advanced" > "Go to ... (unsafe)" > "Allow").
8. Copy the **Web App URL** (starts with `https://script.google.com/macros/s/...`).

## 5. Add to Next.js Environment

1. In your project root, open (or create) `.env.local`.
2. Add the following line:
   ```bash
   GOOGLE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   (Replace with the URL you just copied).
