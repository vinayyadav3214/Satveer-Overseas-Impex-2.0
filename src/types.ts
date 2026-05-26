/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuoteRequisition {
  id: string;
  timestamp: string;
  status: 'PENDING' | 'UNDER_REVIEW' | 'SOURCING' | 'LOGISTICS_MATCHING' | 'COMPLETED';
  buyerName: string;
  buyerEmail: string;
  buyerCompany: string;
  buyerCountry: string;
  commodityType: string;
  quantityMetricTons: number;
  packagingPreference: string;
  destinationPort: string;
  shippingTerms: 'FOB' | 'CIF' | 'CFR' | 'EXW';
  paymentTerms: string;
  entityVerificationId: string;
  notes?: string;
}

export interface CommodityPrice {
  name: string;
  grade: string;
  origin: string;
  price: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
}

export interface ShippingUpdate {
  vesselName: string;
  voyageId: string;
  status: 'IN_TRANSIT' | 'CUSTOMS_CLEARANCE' | 'PORT_ARRIVAL' | 'LOADING';
  departurePort: string;
  destinationPort: string;
  eta: string;
}

export interface HubLocation {
  id: string;
  name: string;
  role: string;
  lat: number; // For plotting relative coordinates in percentage (X, Y)
  lng: number; // For plotting relative coordinates in percentage (X, Y)
  facilities: string[];
}
