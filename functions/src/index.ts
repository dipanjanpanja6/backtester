import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const addPayload = functions.https.onCall(async (data, context) => {
  try {
    const imageBuffer = Buffer.from(JSON.stringify(data, null, "\t"));;
    const contentType = "application/json";
    const fileName = `${new Date().toISOString()}.json`;

    await admin.storage().bucket().file(fileName).save(imageBuffer, {
      metadata: {
        contentType,
      }
    });
    return "Success.";
  } catch (error) {
    return "error";
  }
});
