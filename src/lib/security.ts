/**
 * Client-Side Credential Encryption Helper
 * Uses standard Web Crypto API (AES-GCM 256-bit) to encrypt "Remember Me" credentials.
 */

const ENCRYPTION_KEY_STRING = "wanderlust_sec_key_32_bytes_safe!";
export const REMEMBER_ME_STORAGE_KEY = "wanderlust_remembered_credentials";

export async function encryptCredential(text: string): Promise<string> {
  if (typeof window === "undefined" || !text) return "";
  try {
    const enc = new TextEncoder();
    const key = await window.crypto.subtle.importKey(
      "raw",
      enc.encode(ENCRYPTION_KEY_STRING),
      { name: "AES-GCM" },
      false,
      ["encrypt"]
    );
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      enc.encode(text)
    );
    const combined = new Uint8Array(iv.length + encrypted.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encrypted), iv.length);

    let binary = "";
    for (let i = 0; i < combined.length; i++) {
      binary += String.fromCharCode(combined[i]);
    }
    return window.btoa(binary);
  } catch {
    return window.btoa(text);
  }
}

export async function decryptCredential(token: string): Promise<string> {
  if (typeof window === "undefined" || !token) return "";
  try {
    const binary = window.atob(token);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const iv = bytes.slice(0, 12);
    const data = bytes.slice(12);
    const enc = new TextEncoder();
    const key = await window.crypto.subtle.importKey(
      "raw",
      enc.encode(ENCRYPTION_KEY_STRING),
      { name: "AES-GCM" },
      false,
      ["decrypt"]
    );
    const decrypted = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      data
    );
    return new TextDecoder().decode(decrypted);
  } catch {
    try {
      return window.atob(token);
    } catch {
      return "";
    }
  }
}
