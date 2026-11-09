# מדריך חיבור טופס ההרשמה ישירות ל-Google Sheets (בחינם וללא שרת)

אתר הכנס מוכן לקלוט את כל הנרשמים ישירות אל תוך גיליון Google Sheets של העמותה בזמן אמת. להלן מדריך פשוט של 2 דקות להפעלת החיבור:

---

## שלב 1: יצירת הגיליון ב-Google Sheets
1. פתחו גיליון Google Sheets חדש (למשל בשם: `נרשמים לכנס טיפול נמרץ וקרדיולוגיה 2025`).
2. בשורה הראשונה (שמות העמודות) רשמו:
   - עמודה A: `תאריך רישום`
   - עמודה B: `מספר כרטיס`
   - עמודה C: `שם מלא`
   - עמודה D: `דוא"ל`
   - עמודה E: `טלפון`
   - עמודה F: `מרכז רפואי`
   - עמודה G: `תפקיד ומחלקה`
   - עמודה H: `סדנה שנבחרה`
   - עמודה I: `העדפה קולינרית`

---

## שלב 2: הדבקת סקריפט Google Apps Script
1. בגיליון שיצרתם, לחצו בתפריט העליון על **תוספים / Extensions** -> **Apps Script**.
2. מחקו את הקוד הקיים והדביקו במקומו את הקוד הבא:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" }),
      data.ticketId || "",
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.hospital || "",
      data.role || "",
      data.workshop || "",
      data.dietary || ""
    ]);
    
    // (אופציונלי) שליחת מייל אישור אוטומטי למשתתף:
    /*
    if (data.email) {
      MailApp.sendEmail({
        to: data.email,
        subject: "אישור הרשמה לכנס השנתי לסיעוד קרדיאלי וטיפול נמרץ 2025",
        htmlBody: "שלום " + data.fullName + ",<br><br>שמחים לאשר את הרשמתך לכנס! מספר הכרטיס שלך הוא: <b>" + data.ticketId + "</b>.<br>נתראה בדייוויד אינטרקונטיננטל בתאריכים 14-15 באוקטובר 2025."
      });
    }
    */

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## שלב 3: פריסת הסקריפט (Deploy)
1. לחצו על כפתור **Deploy** (פריסה) -> **New deployment** (פריסה חדשה).
2. ליד Select type לחצו על גלגל השיניים ובחרו **Web app**.
3. הגדירו:
   - **Description**: `ICU Registration Webhook`
   - **Execute as**: `Me` (החשבון שלכם)
   - **Who has access**: **`Anyone`** (חשוב מאוד כדי שהאתר יוכל לשלוח נתונים ללא צורך בהתחברות).
4. לחצו **Deploy**, ואשרו את ההרשאות (Authorize access -> מתקדם -> Go to script (unsafe) -> Allow).
5. העתיקו את ה-**Web App URL** שנוצר (למשל: `https://script.google.com/macros/s/.../exec`).

---

## שלב 4: הפעלה באתר
- בתחתית טופס הרישום באתר לחצו על: **⚙️ הגדרת חיבור ישיר ל-Google Sheets (למנהלי האתר)**.
- הדביקו את הקישור שקיבלתם.
- זהו! מרגע זה, כל נרשם חדש ייכנס ישירות כשורה חדשה בגיליון ה-Google Sheets שלכם.
