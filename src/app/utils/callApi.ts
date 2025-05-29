type FetchDataResponse = any;

/**
 * Fetches data from the CMS using a provided GraphQL query.
 * @param query – GraphQL query string
 * @param noCache – ako je true, prisiljava fetch bez cachea
 * @returns Parsed JSON ili { error: true, details?: string }
 */
export async function fetchData(
  query: string,
  noCache: boolean = false
): Promise<FetchDataResponse | { error: true; details?: string }> {
  const url = process.env.CMS_BASE_URL;
  const apiKey = process.env.API_KEY_SUTRA;

  if (!url) {
    console.error('[fetchData] ❌ CMS_BASE_URL nije definirana');
    return { error: true, details: 'Missing CMS_BASE_URL' };
  }
  if (!apiKey) {
    console.error('[fetchData] ❌ API_KEY_SUTRA nije definirana');
    return { error: true, details: 'Missing API_KEY_SUTRA' };
  }

  const fetchOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify({ query }),
    cache: noCache ? 'no-store' : 'force-cache',
    redirect: 'manual', // da vidimo eventualne redirecte
  };

  try {
    const response = await fetch(url, fetchOptions);

    // status izvan 200–299
    if (!response.ok) {
      console.error(`[fetchData] Fetch error: ${response.status} ${response.statusText}`);
      return { error: true, details: `HTTP ${response.status}` };
    }

    // ako je redirect, bacamo grešku
    if (response.type === 'opaqueredirect' || (response.status >= 300 && response.status < 400)) {
      const location = response.headers.get('location');
      console.error(`[fetchData] Neočekivani redirect na ${location}`);
      return { error: true, details: `Redirect to ${location}` };
    }

    const contentType = response.headers.get('content-type') || '';
    const text = await response.text();
    // log raw odgovor kad ne parsira
    if (!contentType.includes('application/json')) {
      console.error('[fetchData] Odgovor nije JSON, vraćam raw tekst:', text);
      return { error: true, details: 'Non-JSON response' };
    }

    // pokušaj parsiranja JSON-a
    try {
      const data = JSON.parse(text);
      return data;
    } catch (jsonErr) {
      console.error('[fetchData] JSON.parse failed:', jsonErr, '— raw:', text);
      return { error: true, details: 'Invalid JSON' };
    }
  } catch (err) {
    console.error('[fetchData] Exception during fetch:', err);
    return { error: true, details: 'Fetch exception' };
  }
}
