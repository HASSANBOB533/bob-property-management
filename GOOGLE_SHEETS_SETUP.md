# Google Sheets Integration - Setup Guide

This document explains how to set up Google Sheets to receive property listing submissions from the BOB Property Management website.

## Prerequisites
- Google Account
- Access to Google Sheets
- Access to Google Apps Script

## Setup Steps

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BOB Property Submissions"
4. Create headers in the first row:

| Column | Header |
|--------|--------|
| A | Timestamp |
| B | Full Name |
| C | Email |
| D | Phone |
| E | Preferred Language |
| F | Property Name |
| G | Property Type |
| H | Category |
| I | City |
| J | Location |
| K | Compound Name |
| L | Size (sqm) |
| M | Bedrooms |
| N | Bathrooms |
| O | Living Areas |
| P | Floor |
| Q | Has Balcony |
| R | Has Pool |
| S | Has Garden |
| T | Parking |
| U | Amenities |
| V | Services Requested |
| W | Description |
| X | What Makes it Unique |
| Y | Is Furnished |
| Z | Currently Listed |
| AA | Listing Platforms |
| AB | Current Revenue |
| AC | Property Images |

### 2. Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create a timestamp
    var timestamp = new Date();
    
    // Build the row data array
    var row = [
      timestamp,                           // A - Timestamp
      data.fullName || '',                 // B - Full Name
      data.email || '',                    // C - Email
      data.phone || '',                    // D - Phone
      data.preferredLanguage || 'en',     // E - Preferred Language
      data.propertyName || '',            // F - Property Name
      data.propertyType || '',            // G - Property Type
      data.category || '',                // H - Category
      data.city || '',                    // I - City
      data.location || '',                // J - Location
      data.compound || '',                // K - Compound Name
      data.size || '',                    // L - Size (sqm)
      data.bedrooms || '',                // M - Bedrooms
      data.bathrooms || '',               // N - Bathrooms
      data.livingAreas || '',             // O - Living Areas
      data.floor || '',                   // P - Floor
      data.hasBalcony || 'No',           // Q - Has Balcony
      data.hasPool || 'No',              // R - Has Pool
      data.hasGarden || 'No',            // S - Has Garden
      data.parking || 'No',              // T - Parking
      data.amenities || '',              // U - Amenities
      data.services || '',               // V - Services Requested
      data.description || '',            // W - Description
      data.uniqueness || '',             // X - What Makes it Unique
      data.isFurnished || 'no',          // Y - Is Furnished
      data.isListed || 'no',             // Z - Currently Listed
      data.platforms || '',              // AA - Listing Platforms
      data.currentRevenue || '',         // AB - Current Revenue
      data.propertyImages || ''          // AC - Property Images (comma-separated URLs)
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);
    
    // Log success
    Logger.log('Form submitted successfully');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form data received successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '+20 123 456 7890',
        propertyName: 'Test Property',
        propertyType: 'villa',
        city: 'cairo',
        bedrooms: '3',
        bathrooms: '2',
        amenities: 'Wifi, AC, Heating',
        services: 'marketing, design',
        propertyImages: 'https://res.cloudinary.com/demo/image1.jpg, https://res.cloudinary.com/demo/image2.jpg'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Save the script (File > Save or Ctrl+S)
5. Name the project "BOB Property Form Handler"

### 3. Deploy the Script

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description:** BOB Property Form Handler v1
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. Review permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** - it should look like:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```

### 4. Update Website Configuration

#### Option A: Using Environment Variable (Recommended)

1. In your hosting platform (Vercel, Netlify, etc.), add environment variable:
   - **Key:** `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - **Value:** Your web app URL from step 3

2. Redeploy your website

#### Option B: Using Default URL

The form already has a fallback URL configured. If you're using the same Google Apps Script URL mentioned in the problem statement, no additional configuration is needed.

### 5. Test the Integration

1. Visit your website's property listing form
2. Fill out the form completely
3. Upload at least one image via Cloudinary
4. Submit the form
5. Check your Google Sheet - a new row should appear with all the data
6. Verify that the **Property Images** column (AC) contains Cloudinary URLs

## Property Images Format

The `propertyImages` field in Google Sheets will contain comma-separated Cloudinary URLs:

```
https://res.cloudinary.com/your-cloud/image/upload/v123/properties/abc_def/image1.jpg, https://res.cloudinary.com/your-cloud/image/upload/v123/properties/abc_def/image2.jpg
```

### To View Images in Google Sheets:

1. You can click each URL to open in browser
2. Or use this formula in a helper column to create clickable links:
   ```
   =HYPERLINK(AC2, "View Images")
   ```

3. For inline image preview, use:
   ```
   =IMAGE(SPLIT(AC2, ", ", TRUE, TRUE))
   ```
   (This will show the first image)

## Troubleshooting

### Issue: Form submits but data doesn't appear in Sheet

**Solution:**
- Check that the script is deployed with "Anyone" access
- Verify the Web app URL is correct
- Check Google Apps Script execution logs (View > Executions)

### Issue: Images not showing in Google Sheets

**Solution:**
- Verify images are uploading to Cloudinary (check browser console)
- Ensure `propertyImages` field contains valid URLs
- Check that URLs are separated by commas with spaces

### Issue: "Authorization required" error

**Solution:**
- Redeploy the script
- Make sure "Execute as: Me" is selected
- Grant all required permissions

### Issue: CORS errors

**Solution:**
- The form uses `mode: 'no-cors'` which is correct for Google Apps Script
- No additional CORS configuration needed on Google's side

## Data Privacy & Security

- Form submissions are stored in your private Google Sheet
- Only people with sheet access can view submissions
- Consider implementing additional security:
  - Use a service account for more control
  - Add data validation in the Apps Script
  - Implement rate limiting
  - Add email notifications for new submissions

## Email Notifications (Optional)

Add this function to send email notifications when new submissions arrive:

```javascript
function sendNotificationEmail(data) {
  var recipient = 'your-email@bestofbedz.com';
  var subject = 'New Property Submission: ' + data.propertyName;
  var body = 'New property listing submission received:\n\n' +
             'Name: ' + data.fullName + '\n' +
             'Email: ' + data.email + '\n' +
             'Phone: ' + data.phone + '\n' +
             'Property: ' + data.propertyName + '\n' +
             'Type: ' + data.propertyType + '\n\n' +
             'View full details in the spreadsheet.';
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it in `doPost()` after appending the row:
```javascript
sheet.appendRow(row);
sendNotificationEmail(data); // Add this line
```

## Support

For technical issues:
- Check Google Apps Script documentation: https://developers.google.com/apps-script
- Review execution logs in Apps Script editor
- Test with the `testDoPost()` function

For website integration issues:
- Check browser console for errors
- Verify environment variables are set correctly
- Review form submission in Network tab

---

Last updated: December 2024
