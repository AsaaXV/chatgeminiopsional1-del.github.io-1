import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateWhatsAppUrl,
  formatRegistrationMessage,
  calculateEstimatedMonthlyDues,
  filterFacilities,
  validateRegistrationForm,
  formatIDR
} from './asrama.ts';
import type { RegistrationFormData } from './asrama.ts';
import { FACILITIES_DATA } from '../data/dormitoryData.ts';

test('generateWhatsAppUrl builds valid wa.me link with encoded text', () => {
  const url = generateWhatsAppUrl('+62 852-4038-9682', 'Tabe Kakanda');
  assert.equal(url.startsWith('https://wa.me/6285240389682?text='), true);
  assert.equal(url.includes('Tabe'), true);
});

test('formatRegistrationMessage includes all necessary fields politely', () => {
  const sampleData: RegistrationFormData = {
    fullName: 'Muhammad Daeng Rewa',
    subdistrict: 'Rumbia',
    villageName: 'Tompobulu',
    campusName: 'Universitas Hasanuddin (UNHAS)',
    studyProgram: 'Teknik Sipil',
    batchYear: '2024',
    dormitoryChoice: 'aspura',
    phone: '081234567890',
    parentName: 'H. Daeng Sese'
  };

  const message = formatRegistrationMessage(sampleData);
  assert.equal(message.includes("Tabe' Kakanda Pengurus Aspura (Putra)"), true);
  assert.equal(message.includes('Muhammad Daeng Rewa'), true);
  assert.equal(message.includes('Kec. Rumbia, Desa/Kel. Tompobulu'), true);
  assert.equal(message.includes('Universitas Hasanuddin (UNHAS)'), true);
  assert.equal(message.includes('Rp1.500.000'), true);
  assert.equal(message.includes('Semester'), true);
});

test('calculateEstimatedMonthlyDues sums up selected options correctly', () => {
  const calculationBasic = calculateEstimatedMonthlyDues({
    includeWifi: true,
    includeKasWarga: true
  });
  assert.equal(calculationBasic.total, 55000);
  assert.equal(calculationBasic.breakdown.length, 3);

  const calculationWifiOnly = calculateEstimatedMonthlyDues({
    includeWifi: true,
    includeKasWarga: false
  });
  assert.equal(calculationWifiOnly.total, 40000);

  const calculationWithExtra = calculateEstimatedMonthlyDues({
    includeWifi: true,
    includeKasWarga: true,
    additionalCustomDues: 20000
  });
  assert.equal(calculationWithExtra.total, 75000);
});

test('filterFacilities filters by search query and category correctly', () => {
  const wifiResults = filterFacilities(FACILITIES_DATA, 'wifi');
  assert.equal(wifiResults.length >= 1, true);
  assert.equal(wifiResults[0].id, 'wifi');

  const pokokOnly = filterFacilities(FACILITIES_DATA, '', 'pokok');
  assert.equal(pokokOnly.every(f => f.category === 'pokok'), true);
});

test('validateRegistrationForm rejects invalid input and accepts valid input', () => {
  const invalidData: RegistrationFormData = {
    fullName: '',
    subdistrict: '',
    campusName: '',
    studyProgram: '',
    batchYear: '24',
    dormitoryChoice: 'aspura',
    phone: '123',
    parentName: ''
  };

  const invalidResult = validateRegistrationForm(invalidData);
  assert.equal(invalidResult.isValid, false);
  assert.equal(Boolean(invalidResult.errors.fullName), true);
  assert.equal(Boolean(invalidResult.errors.batchYear), true);

  const validData: RegistrationFormData = {
    fullName: 'Nurul Indah',
    subdistrict: 'Binamu',
    campusName: 'Universitas Negeri Makassar (UNM)',
    studyProgram: 'Pendidikan Bahasa Inggris',
    batchYear: '2024',
    dormitoryChoice: 'aspuri',
    phone: '085397142677',
    parentName: 'Ibu Aminah'
  };

  const validResult = validateRegistrationForm(validData);
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('formatIDR formats zero and amounts cleanly', () => {
  assert.equal(formatIDR(0), 'Gratis / Swakelola');
  assert.equal(formatIDR(40000), 'Rp40.000');
});
