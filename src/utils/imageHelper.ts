/**
 * Utility to resolve Google Drive file IDs and webp URLs to high performance direct images
 */
export function getDriveImageUrl(driveId?: string, fallbackUrl?: string): string {
  if (driveId) {
    // lh3.googleusercontent.com/d/{id} and google thumbnail render directly without CORS or cookies
    return `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`;
  }
  if (fallbackUrl && fallbackUrl.trim() !== '') {
    return fallbackUrl;
  }
  return 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80';
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  } else {
    // Fallback for older browsers or iframes
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return Promise.resolve(successful);
    } catch {
      return Promise.resolve(false);
    }
  }
}
