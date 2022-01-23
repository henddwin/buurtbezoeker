
export function getMedals(score) {
    if(score == 25000){
        return 'platinum';
    }
    if(score > 24500){
        return 'gold';
    }
    if(score > 20000){
        return 'silver';
    }
    if(score > 15000){
        return 'bronze';
    }
    return '';
}

export const COUNTRIES_MEDALS_DATA = [
  {
    "iso_a2": "AL",
    "osmType": "relation",
    "osmId": 53292
  },
  {
    "iso_a2": "AS",
    "osmType": "relation",
    "osmId": 2177187
  },
  {
    "iso_a2": "AD",
    "osmType": "relation",
    "osmId": 9407
  },
  {
    "iso_a2": "AR",
    "osmType": "relation",
    "osmId": 286393
  },
  {
    "iso_a2": "AU",
    "osmType": "relation",
    "osmId": 80500
  },
  {
    "iso_a2": "AT",
    "osmType": "relation",
    "osmId": 16239
  },
  {
    "iso_a2": "BD",
    "osmType": "relation",
    "osmId": 184640
  },
  {
    "iso_a2": "BE",
    "osmType": "relation",
    "osmId": 52411
  },
  {
    "iso_a2": "BM",
    "osmType": "relation",
    "osmId": 1993208
  },
  {
    "iso_a2": "BT",
    "osmType": "relation",
    "osmId": 184629
  },
  {
    "iso_a2": "BO",
    "osmType": "relation",
    "osmId": 252645
  },
  {
    "iso_a2": "BW",
    "osmType": "relation",
    "osmId": 1889339
  },
  {
    "iso_a2": "BR",
    "osmType": "relation",
    "osmId": 59470
  },
  {
    "iso_a2": "IO",
    "osmType": "relation",
    "osmId": 1993867
  },
  {
    "iso_a2": "BG",
    "osmType": "relation",
    "osmId": 186382
  },
  {
    "iso_a2": "KH",
    "osmType": "relation",
    "osmId": 49898
  },
  {
    "iso_a2": "CA",
    "osmType": "relation",
    "osmId": 1428125
  },
  {
    "iso_a2": "CL",
    "osmType": "relation",
    "osmId": 167454
  },
  {
    "iso_a2": "CX",
    "osmType": "relation",
    "osmId": 2177207
  },
  {
    "iso_a2": "CC",
    "osmType": "relation",
    "osmId": 82636
  },
  {
    "iso_a2": "CO",
    "osmType": "relation",
    "osmId": 120027
  },
  {
    "iso_a2": "HR",
    "osmType": "relation",
    "osmId": 214885
  },
  {
    "iso_a2": "DK",
    "osmType": "relation",
    "osmId": 50046
  },
  {
    "iso_a2": "EC",
    "osmType": "relation",
    "osmId": 108089
  },
  {
    "iso_a2": "EE",
    "osmType": "relation",
    "osmId": 79510
  },
  {
    "iso_a2": "FO",
    "osmType": "relation",
    "osmId": 52939
  },
  {
    "iso_a2": "FI",
    "osmType": "relation",
    "osmId": 54224
  },
  {
    "iso_a2": "FR",
    "osmType": "relation",
    "osmId": 1403916
  },
  {
    "iso_a2": "GH",
    "osmType": "relation",
    "osmId": 192781
  },
  {
    "iso_a2": "GI",
    "osmType": "relation",
    "osmId": 1278736
  },
  {
    "iso_a2": "GR",
    "osmType": "relation",
    "osmId": 192307
  },
  {
    "iso_a2": "GL",
    "osmType": "relation",
    "osmId": 2184073
  },
  {
    "iso_a2": "HK",
    "osmType": "relation",
    "osmId": 913110
  },
  {
    "iso_a2": "HU",
    "osmType": "relation",
    "osmId": 21335
  },
  {
    "iso_a2": "IS",
    "osmType": "relation",
    "osmId": 299133
  },
  {
    "iso_a2": "ID",
    "osmType": "relation",
    "osmId": 304751
  },
  {
    "iso_a2": "IE",
    "osmType": "relation",
    "osmId": 62273
  },
  {
    "iso_a2": "IM",
    "osmType": "relation",
    "osmId": 62269
  },
  {
    "iso_a2": "IL",
    "osmType": "relation",
    "osmId": 1473946
  },
  {
    "iso_a2": "IT",
    "osmType": "relation",
    "osmId": 365331
  },
  {
    "iso_a2": "JP",
    "osmType": "relation",
    "osmId": 382313
  },
  {
    "iso_a2": "JE",
    "osmType": "relation",
    "osmId": 367988
  },
  {
    "iso_a2": "JO",
    "osmType": "relation",
    "osmId": 184818
  },
  {
    "iso_a2": "KE",
    "osmType": "relation",
    "osmId": 192798
  },
  {
    "iso_a2": "KG",
    "osmType": "relation",
    "osmId": 178009
  },
  {
    "iso_a2": "LV",
    "osmType": "relation",
    "osmId": 72594
  },
  {
    "iso_a2": "LS",
    "osmType": "relation",
    "osmId": 2093234
  },
  {
    "iso_a2": "LT",
    "osmType": "relation",
    "osmId": 72596
  },
  {
    "iso_a2": "LU",
    "osmType": "relation",
    "osmId": 2171347
  },
  {
    "iso_a2": "MO",
    "osmType": "relation",
    "osmId": 1867188
  },
  {
    "iso_a2": "MY",
    "osmType": "relation",
    "osmId": 2108121
  },
  {
    "iso_a2": "MT",
    "osmType": "relation",
    "osmId": 365307
  },
  {
    "iso_a2": "MX",
    "osmType": "relation",
    "osmId": 114686
  },
  {
    "iso_a2": "MC",
    "osmType": "relation",
    "osmId": 1124039
  },
  {
    "iso_a2": "MN",
    "osmType": "relation",
    "osmId": 161033
  },
  {
    "iso_a2": "ME",
    "osmType": "relation",
    "osmId": 53296
  },
  {
    "iso_a2": "NL",
    "osmType": "relation",
    "osmId": 12728888
  },
  {
    "iso_a2": "NZ",
    "osmType": "relation",
    "osmId": 556706
  },
  {
    "iso_a2": "NG",
    "osmType": "relation",
    "osmId": 192787
  },
  {
    "iso_a2": "MK",
    "osmType": "relation",
    "osmId": 53293
  },
  {
    "iso_a2": "MP",
    "osmType": "relation",
    "osmId": 306004
  },
  {
    "iso_a2": "NO",
    "osmType": "relation",
    "osmId": 2978650
  },
  {
    "iso_a2": "PE",
    "osmType": "relation",
    "osmId": 288247
  },
  {
    "iso_a2": "PH",
    "osmType": "relation",
    "osmId": 443174
  },
  {
    "iso_a2": "PN",
    "osmType": "relation",
    "osmId": 2185375
  },
  {
    "iso_a2": "PL",
    "osmType": "relation",
    "osmId": 49715
  },
  {
    "iso_a2": "PT",
    "osmType": "relation",
    "osmId": 295480
  },
  {
    "iso_a2": "PR",
    "osmType": "relation",
    "osmId": 4422604
  },
  {
    "iso_a2": "RO",
    "osmType": "relation",
    "osmId": 90689
  },
  {
    "iso_a2": "RU",
    "osmType": "relation",
    "osmId": 60189
  },
  {
    "iso_a2": "RE",
    "osmType": "relation",
    "osmId": 1785276
  },
  {
    "iso_a2": "SM",
    "osmType": "relation",
    "osmId": 54624
  },
  {
    "iso_a2": "SN",
    "osmType": "relation",
    "osmId": 192775
  },
  {
    "iso_a2": "RS",
    "osmType": "relation",
    "osmId": 1741311
  },
  {
    "iso_a2": "SG",
    "osmType": "relation",
    "osmId": 536780
  },
  {
    "iso_a2": "SK",
    "osmType": "relation",
    "osmId": 14296
  },
  {
    "iso_a2": "SI",
    "osmType": "relation",
    "osmId": 218657
  },
  {
    "iso_a2": "ZA",
    "osmType": "relation",
    "osmId": 87565
  },
  {
    "iso_a2": "GS",
    "osmType": "relation",
    "osmId": 1983628
  },
  {
    "iso_a2": "KR",
    "osmType": "relation",
    "osmId": 307756
  },
  {
    "iso_a2": "ES",
    "osmType": "relation",
    "osmId": 1311341
  },
  {
    "iso_a2": "LK",
    "osmType": "relation",
    "osmId": 536807
  },
  {
    "iso_a2": "SE",
    "osmType": "relation",
    "osmId": 52822
  },
  {
    "iso_a2": "CH",
    "osmType": "relation",
    "osmId": 51701
  },
  {
    "iso_a2": "TW",
    "osmType": "relation",
    "osmId": 449220
  },
  {
    "iso_a2": "TH",
    "osmType": "relation",
    "osmId": 2067731
  },
  {
    "iso_a2": "TN",
    "osmType": "relation",
    "osmId": 192757
  },
  {
    "iso_a2": "TR",
    "osmType": "relation",
    "osmId": 174737
  },
  {
    "iso_a2": "UG",
    "osmType": "relation",
    "osmId": 192796
  },
  {
    "iso_a2": "UA",
    "osmType": "relation",
    "osmId": 60199
  },
  {
    "iso_a2": "GB",
    "osmType": "relation",
    "osmId": 62149
  },
  {
    "iso_a2": "US",
    "osmType": "relation",
    "osmId": 148838
  },
  {
    "iso_a2": "VI",
    "osmType": "relation",
    "osmId": 286898
  },
  {
    "iso_a2": "UY",
    "osmType": "relation",
    "osmId": 287072
  },
  {
    "iso_a2": "AQ",
    "osmType": "relation",
    "osmId": 2186646
  },
  {
    "iso_a2": "CW",
    "osmType": "relation",
    "osmId": 1216719
  },
  {
    "iso_a2": "CZ",
    "osmType": "relation",
    "osmId": 51684
  },
  {
    "iso_a2": "SZ",
    "osmType": "relation",
    "osmId": 88210
  },
  {
    "iso_a2": "PS",
    "osmType": "relation",
    "osmId": 1703814
  }
];

