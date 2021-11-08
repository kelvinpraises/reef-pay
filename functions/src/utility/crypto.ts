import { randomBytes, createHash } from "crypto";
import { checkUniqueAPIKey } from "./firebase";

// Generates unique random string as API key
export async function generateAPIKey() {
  const apiKey = randomBytes(16).toString("hex");
  const hashedAPIKey = hashAPIKey(apiKey);

  const isNew = await checkUniqueAPIKey(apiKey);

  // Ensures API key is unique in Database
  if (!isNew) {
    generateAPIKey();
  } else {
    return { apiKey, hashedAPIKey };
  }
}

// Returns hashed API key string
export function hashAPIKey(apiKey: string) {
  const hashedAPIKey = createHash("md5").update(apiKey).digest("hex");
  return hashedAPIKey;
}
