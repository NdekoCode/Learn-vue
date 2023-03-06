export class NotFoundError extends Error {}
export async function api(url) {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 400) {
      return await response.json();
    }
  } catch (error) {
    throw new NotFoundError();
  }
}
