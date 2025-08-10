import { getStrapiUrl } from "@/lib/utils";
import { strapi } from '@strapi/client';

const BASE_API_URL = getStrapiUrl() + "/api";
const sdk = strapi({ baseURL: BASE_API_URL });
export default sdk;