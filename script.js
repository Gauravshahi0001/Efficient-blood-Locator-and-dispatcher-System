//API: National Health Resource Repository (NHRR) – India’s Blood Bank Directory API

const fallbackData = [
  // ────── Bihar ──────
  {
    name: "All India Institute of Medical Sciences (AIIMS) Patna Blood Bank",
    district: "Patna",
    city: "Patna",
    state: "Bihar",
    contact: "0612‑2451067",
    lat: 25.5880,
    lng: 85.1280
  },
  {
    name: "PMCH Transfusion Medicine Dept (PMCH Patna)",
    district: "Patna",
    city: "Patna",
    state: "Bihar",
    contact: "0612‑2300334",
    lat: 25.6020,
    lng: 85.1210
  },
  {
    name: "IGIMS Blood Bank",
    district: "Patna",
    city: "Patna",
    state: "Bihar",
    contact: "0612‑2297631",
    lat: 25.6120,
    lng: 85.1200
  },
  {
    name: "National Blood Bank & Research Center",
    district: "Patna",
    city: "Patna",
    state: "Bihar",
    contact: "0612‑2355575",
    lat: 25.6102,
    lng: 85.1350
  },
  {
    name: "Life Line Blood Bank",
    district: "Patna",
    city: "Patna",
    state: "Bihar",
    contact: "0612‑2301600",
    lat: 25.6191,
    lng: 85.1599
  },
  {
    name: "Military Hospital Blood Bank",
    district: "Danapur",
    city: "Patna",
    state: "Bihar",
    contact: "0612‑3262107",
    lat: 25.6368,
    lng: 85.0319
  },

  // ────── Himachal Pradesh ──────
  {
    name: "Kamla Nehru Hospital Blood Bank",
    district: "Shimla",
    city: "Shimla",
    state: "Himachal Pradesh",
    contact: "0177‑2624081",
    lat: 31.0966,
    lng: 77.1752
  },
  {
    name: "Indira Gandhi Medical College (IGMC) Blood Bank",
    district: "Shimla",
    city: "Shimla",
    state: "Himachal Pradesh",
    contact: "0177‑2623410",
    lat: 31.1020,
    lng: 77.2050
  },
  {
    name: "Deen Dayal Upadhyaya Zonal Hospital Blood Bank",
    district: "Shimla",
    city: "Shimla",
    state: "Himachal Pradesh",
    contact: "0177‑265xxxx", // approximate, please verify
    lat: 31.1030,
    lng: 77.1900
  },

  // ────── Maharashtra ──────
  {
    name: "KEM Hospital Blood Bank",
    district: "Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    contact: "022‑24101920",
    lat: 19.0620,
    lng: 72.8540
  },
  {
    name: "Sion Hospital Blood Bank",
    district: "Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    contact: "022‑24022066",
    lat: 19.0521,
    lng: 72.8787
  },
  {
    name: "Nair Hospital Blood Bank",
    district: "Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    contact: "022‑25272000",
    lat: 19.0224,
    lng: 72.8488
  },
  {
    name: "Lokmanya Tilak Municipal General Hospital Blood Bank",
    district: "Mumbai Suburban",
    city: "Mumbai",
    state: "Maharashtra",
    contact: "022‑65771196",
    lat: 19.0590,
    lng: 72.9085
  },
  {
    name: "Sassoon Hospital Blood Bank",
    district: "Pune",
    city: "Pune",
    state: "Maharashtra",
    contact: "020‑26126001",
    lat: 18.5196,
    lng: 73.8553
  },

  // ────── Karnataka ──────
  {
    name: "Victoria Hospital Blood Bank (Bangalore Medical College)",
    district: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    contact: "080‑26722344",
    lat: 12.9716,
    lng: 77.5946
  },
  {
    name: "Mazumdar Shaw Medical Centre Blood Bank",
    district: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    contact: "080‑27819300",
    lat: 12.9165,
    lng: 77.6513
  },
  {
    name: "Rashtrothana Blood Bank",
    district: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    contact: "080‑26728586",
    lat: 12.9750,
    lng: 77.5700
  },
  {
    name: "Kidwai Memorial Institute of Oncology Blood Bank",
    district: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    contact: "080‑26961900",
    lat: 12.9724,
    lng: 77.5945
  },
  {
    name: "St John’s Medical College Hospital Blood Bank",
    district: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    contact: "080‑22068222",
    lat: 12.9500,
    lng: 77.5900
  },
  // ────── West Bengal ──────
  {
    name: "Central Blood Bank, Calcutta Medical College",
    district: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    contact: "033‑22416666",
    lat: 22.5898,
    lng: 88.3500
  },
  {
    name: "CMRI Blood Bank",
    district: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    contact: "033‑23347200",
    lat: 22.5726,
    lng: 88.3639
  },
  {
    name: "Marwari Relief Society Blood Bank",
    district: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    contact: "033‑2230XXXX",
    lat: 22.5677,
    lng: 88.3526
  },
  {
    name: "Red Cross Society Blood Bank",
    district: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    contact: "033‑22223456",
    lat: 22.5750,
    lng: 88.3600
  },
  {
    name: "Institute of Transfusion Medicine, Kolkata",
    district: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    contact: "033‑22654455",
    lat: 22.5800,
    lng: 88.3600
  },

  // ────── Tamil Nadu ──────
  {
    name: "Government Stanley Medical College Blood Bank",
    district: "Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    contact: "044‑28510101",
    lat: 13.0664,
    lng: 80.2837
  },
  {
    name: "Government General Hospital Blood Bank",
    district: "Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    contact: "044‑25342901",
    lat: 13.0800,
    lng: 80.2810
  },
  {
    name: "Kilpauk Medical College Hospital Blood Bank",
    district: "Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    contact: "044‑26400210",
    lat: 13.0700,
    lng: 80.2426
  },
  {
    name: "Egmore Lions Blood Bank & Research Foundation",
    district: "Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    contact: "044‑28414959",
    lat: 13.0818,
    lng: 80.2706
  },
  {
    name: "Indian Red Cross Society Blood Bank",
    district: "Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    contact: "044‑28554548",
    lat: 13.0825,
    lng: 80.2800
  },

  // ────── Uttar Pradesh ──────
  {
    name: "Shekhar Blood Bank & Component Centre",
    district: "Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    contact: "9936306999",
    lat: 26.8467,
    lng: 80.9462
  },
  {
    name: "St. Joseph's Hospital & Blood Bank",
    district: "Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    contact: "5224054240",
    lat: 26.8480,
    lng: 80.9430
  },
  {
    name: "B.N.K. Hospital Blood Bank",
    district: "Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    contact: "7007930579",
    lat: 26.8490,
    lng: 80.9340
  },
  {
    name: "Divine Heart Hospital & Research Centre Blood Bank",
    district: "Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    contact: "5222721991",
    lat: 26.8425,
    lng: 80.9550
  },
  {
    name: "University of Medical Sciences Blood Bank",
    district: "Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    contact: "0522‑2638898",
    lat: 26.8450,
    lng: 80.9450
  },
  // ────── Gujarat ──────
  {
    name: "Civil Hospital Blood Bank",
    district: "Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    contact: "079‑22683949",
    lat: 23.0225,
    lng: 72.5714
  },
  {
    name: "Prathama Blood Centre",
    district: "Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    contact: "917900000000", 
    lat: 23.0230,
    lng: 72.5715
  },

  // ────── Punjab ──────
  {
    name: "Guru Nanak Dev Hospital Blood Bank",
    district: "Amritsar",
    city: "Amritsar",
    state: "Punjab",
    contact: "0183‑2426918",
    lat: 31.6335,
    lng: 74.8765
  },
  {
    name: "Sri Guru Ram Das Charitable Hospital Blood Bank",
    district: "Amritsar",
    city: "Amritsar",
    state: "Punjab",
    contact: "0183‑2870345",
    lat: 31.6330,
    lng: 74.8650
  },

  // ────── Rajasthan ──────
  {
    name: "Sawai Man Singh Hospital Blood Bank",
    district: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    contact: "0141‑2560291",
    lat: 26.9160,
    lng: 75.8185
  },
  {
    name: "SMS Medical College Blood Bank",
    district: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    contact: "0141‑2518821",
    lat: 26.9180,
    lng: 75.8170
  },
  // ────── Kerala ──────
  {
    name: "IMA Blood Bank Complex & Research Centre",
    district: "Thrissur",
    city: "Thrissur",
    state: "Kerala",
    contact: "0487‑2330830", 
    lat: 10.5207,
    lng: 76.2144
  },
  {
    name: "IMA Voluntary Donor Blood Bank",
    district: "Ernakulam",
    city: "Kochi",
    state: "Kerala",
    contact: "0484‑2350111", 
    lat: 9.9816,
    lng: 76.2999
  },
  {
    name: "Govt. Medical College Hospital Blood Bank",
    district: "Kochi",
    city: "Kochi",
    state: "Kerala",
    contact: "0484‑2881123", 
    lat: 9.9906,
    lng: 76.2897
  },
  {
    name: "St Joseph’s Hospital Blood Bank",
    district: "Ernakulam",
    city: "Kochi",
    state: "Kerala",
    contact: "0484‑2784000", 
    lat: 9.9860,
    lng: 76.3135
  },
  {
    name: "Jubilee Mission Medical College Blood Bank",
    district: "Thrissur",
    city: "Thrissur",
    state: "Kerala",
    contact: "0487‑2250040",
    lat: 10.5298,
    lng: 76.2145
  },

  // ────── Odisha ──────
  {
    name: "Odisha Blood Bank",
    district: "Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    contact: "0674‑2394985",
    lat: 20.2961,
    lng: 85.8245
  },
  {
    name: "KIMS Blood Bank",
    district: "Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    contact: "0674‑7111000",
    lat: 20.3333,
    lng: 85.8215
  },
  {
    name: "ABCD Blood Organisation",
    district: "Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    contact: "9090490535",
    lat: 20.2620,
    lng: 85.8270
  },
  {
    name: "Department of Blood Bank, Capital Hospital",
    district: "Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    contact: "0674‑2446912", 
    lat: 20.2711,
    lng: 85.8184
  },
  {
    name: "Indian Red Cross Society Blood Bank",
    district: "Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    contact: "9437014070",
    lat: 20.2965,
    lng: 85.8236
  },

  // ────── Haryana ──────
  {
    name: "PGIMS Rohtak Blood Bank",
    district: "Rohtak",
    city: "Rohtak",
    state: "Haryana",
    contact: "01262‑211306",
    lat: 28.8955,
    lng: 76.6066
  },
  {
    name: "Civil Hospital Blood Bank",
    district: "Rohtak",
    city: "Rohtak",
    state: "Haryana",
    contact: "01262‑236123", 
    lat: 28.8952,
    lng: 76.6000
  },
  {
    name: "Yamunanagar Trauma Centre Blood Bank",
    district: "Yamunanagar",
    city: "Yamunanagar",
    state: "Haryana",
    contact: "01732‑233456", 
    lat: 30.1280,
    lng: 77.2670
  },
  {
    name: "IRCS Blood Bank, Panchkula",
    district: "Panchkula",
    city: "Panchkula",
    state: "Haryana",
    contact: "0172‑2567890", 
    lat: 30.6920,
    lng: 76.8600
  },
  {
    name: "Divine Blood Bank, Bata Chowk",
    district: "Faridabad",
    city: "Faridabad",
    state: "Haryana",
    contact: "0129‑2211122", 
    lat: 28.4112,
    lng: 77.3178
  },
  // ────── Jharkhand ──────
  {
    name: "RIMS Blood Bank, Ranchi",
    district: "Ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    contact: "+91‑651‑2541533",
    lat: 23.3441,
    lng: 85.3096
  },
  {
    name: "RIMS (GetBlood.in records) Blood Bank",
    district: "Ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    contact: "0651‑2540656",
    lat: 23.3441,
    lng: 85.3096
  },

  // ────── Assam ──────
  {
    name: "Assam Medical College & Hospital Blood Bank",
    district: "Dibrugarh",
    city: "Dibrugarh",
    state: "Assam",
    contact: "94350‑33505",
    lat: 27.4830,
    lng: 94.9000
  },

  // ────── Chandigarh ──────
  {
    name: "PGIMER Transfusion Medicine Dept, Nehru Hospital",
    district: "Chandigarh",
    city: "Chandigarh",
    state: "Chandigarh",
    contact: "0172‑2756481",
    lat: 30.7333,
    lng: 76.7794
  },
  // ────── Arunachal Pradesh ──────
  {
    name: "Ramakrishna Mission Hospital Blood Bank",
    district: "Papum Pare",
    city: "Itanagar",
    state: "Arunachal Pradesh",
    contact: "0360‑2212263",
    lat: 27.0844,
    lng: 93.6053
  },
  {
    name: "Arunachal State Hospital Blood Bank",
    district: "Papum Pare",
    city: "Naharlagun",
    state: "Arunachal Pradesh",
    contact: "09436896857",
    lat: 27.0945,
    lng: 93.6627
  },

  // ────── Uttarakhand ──────
  {
    name: "Government Combined Hospital Blood Bank",
    district: "Haridwar",
    city: "Roorkee",
    state: "Uttarakhand",
    contact: "9412403065",
    lat: 29.8546,
    lng: 77.8888
  },
  {
    name: "Mother Teresa Blood Bank",
    district: "Haridwar",
    city: "Roorkee",
    state: "Uttarakhand",
    contact: "7579020008",
    lat: 29.8580,
    lng: 77.8890
  },
  {
    name: "IMA Blood Bank of Uttarakhand",
    district: "Dehradun",
    city: "Dehradun",
    state: "Uttarakhand",
    contact: "+91‑0135‑2755010",
    lat: 30.3165,
    lng: 78.0322
  },

  // ────── Madhya Pradesh ──────
  {
    name: "Hamidia Hospital Blood Bank",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    contact: "0755‑2538891",
    lat: 23.2599,
    lng: 77.4126
  },
  {
    name: "Gandhi Medical College & Hamidia Hospital Blood Bank",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    contact: "0755‑4050148",
    lat: 23.2599,
    lng: 77.4126
  },
  {
    name: "MP Thelasmia Kid Care Society Blood Bank",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    contact: "9827267821",
    lat: 23.2600,
    lng: 77.4125
  },
  // ────── Sikkim ──────
  {
    name: "Central Blood Bank, STNM Hospital",
    district: "East Sikkim",
    city: "Gangtok",
    state: "Sikkim",
    contact: "03592‑207691",
    lat: 27.3314,
    lng: 88.6130
  },

  // ────── Meghalaya ──────
  {
    name: "Regional Blood Bank, Pasteur Institute",
    district: "East Khasi Hills",
    city: "Shillong",
    state: "Meghalaya",
    contact: "0364‑2591629",
    lat: 25.5760,
    lng: 91.8921
  },
  {
    name: "Nazareth Hospital Blood Bank",
    district: "East Khasi Hills",
    city: "Shillong",
    state: "Meghalaya",
    contact: "0364‑2224052",
    lat: 25.5784,
    lng: 91.8825
  },
  {
    name: "Military Hospital Blood Bank",
    district: "East Khasi Hills",
    city: "Shillong",
    state: "Meghalaya",
    contact: "0364‑2224300",
    lat: 25.5770,
    lng: 91.8830
  },
  {
    name: "NEIGRIHMS Blood Bank",
    district: "East Khasi Hills",
    city: "Shillong",
    state: "Meghalaya",
    contact: "0364‑2538063",
    lat: 25.5776,
    lng: 91.8715
  },
  {
    name: "Dr H. Gordon Roberts Hospital Blood Bank",
    district: "East Khasi Hills",
    city: "Shillong",
    state: "Meghalaya",
    contact: "0364‑2545826",
    lat: 25.5772,
    lng: 91.8790
  },

  // ────── Goa ──────
  {
    name: "Goa Medical College Blood Bank",
    district: "North Goa",
    city: "Bambolim",
    state: "Goa",
    contact: "0832‑2458724",
    lat: 15.4780,
    lng: 73.8071
  },
  // ────── Nagaland ──────
  {
    name: "Naga Hospital Blood Bank",
    district: "Kohima",
    city: "Kohima",
    state: "Nagaland",
    contact: "0370‑2242516",
    lat: 25.6720,
    lng: 94.1077
  },

  // ────── Manipur ──────
  {
    name: "JNIMS Blood Bank",
    district: "Imphal East",
    city: "Imphal",
    state: "Manipur",
    contact: "0385‑2443170",
    lat: 24.8170,
    lng: 93.9354
  },
  {
    name: "RIMS Blood Bank",
    district: "Imphal West",
    city: "Imphal",
    state: "Manipur",
    contact: "0385‑2414729",
    lat: 24.8175,
    lng: 93.9229
  },

  // ────── Tripura ──────
  {
    name: "Agartala Government Medical College Blood Bank",
    district: "West Tripura",
    city: "Agartala",
    state: "Tripura",
    contact: "0381‑2315863",
    lat: 23.8315,
    lng: 91.2820
  },

  // ────── Mizoram ──────
  {
    name: "Civil Hospital Blood Bank",
    district: "Aizawl",
    city: "Aizawl",
    state: "Mizoram",
    contact: "0389‑2322313",
    lat: 23.7367,
    lng: 92.7146
  },

  // ────── Andhra Pradesh ──────
  {
    name: "King George Hospital Blood Bank",
    district: "Visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    contact: "0891‑2561158",
    lat: 17.7041,
    lng: 83.2977
  },
  {
    name: "Government General Hospital Blood Bank",
    district: "Guntur",
    city: "Guntur",
    state: "Andhra Pradesh",
    contact: "0863‑2222453",
    lat: 16.3146,
    lng: 80.4315
  },
  {
    name: "RIMS Blood Bank",
    district: "Kadapa",
    city: "Kadapa",
    state: "Andhra Pradesh",
    contact: "08562‑225678",
    lat: 14.4772,
    lng: 78.8236
  },

  // ────── Chhattisgarh ──────
  {
    name: "Dr Bhimrao Ambedkar Memorial Hospital Blood Bank",
    district: "Raipur",
    city: "Raipur",
    state: "Chhattisgarh",
    contact: "0771‑2221231",
    lat: 21.2514,
    lng: 81.6296
  },
  {
    name: "AIIMS Raipur Blood Bank",
    district: "Raipur",
    city: "Raipur",
    state: "Chhattisgarh",
    contact: "0771‑2573777",
    lat: 21.2420,
    lng: 81.6612
  },
  // ────── Delhi (NCT) ──────
  {
    name: "AIIMS Main Blood Bank",
    district: "South Delhi",
    city: "New Delhi",
    state: "Delhi",
    contact: "011‑26593625",
    lat: 28.5670,
    lng: 77.2100
  },
  {
    name: "Cardio Neuro Centre Blood Bank, AIIMS",
    district: "South Delhi",
    city: "New Delhi",
    state: "Delhi",
    contact: "011‑26593749",
    lat: 28.5670,
    lng: 77.2100
  },
  {
    name: "Indian Red Cross Society Blood Bank",
    district: "Central Delhi",
    city: "New Delhi",
    state: "Delhi",
    contact: "011‑23711551",
    lat: 28.6187,
    lng: 77.2085
  },
  {
    name: "JPN Apex Trauma Centre Blood Bank, AIIMS",
    district: "South Delhi",
    city: "New Delhi",
    state: "Delhi",
    contact: "011‑26731166",
    lat: 28.5675,
    lng: 77.2105
  },
  {
    name: "Rotary Blood Bank",
    district: "South Delhi",
    city: "New Delhi",
    state: "Delhi",
    contact: "011‑29962078",
    lat: 28.5245,
    lng: 77.2677
  },
  {
    name: "Lions Blood Bank, Shalimar Bagh",
    district: "North West Delhi",
    city: "New Delhi",
    state: "Delhi",
    contact: "011‑47122000",
    lat: 28.7019,
    lng: 77.1634
  },
  // ────── Telangana ──────
  {
    name: "Indian Red Cross Society Blood Bank (Vidya Nagar, Hyderabad)",
    district: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    contact: "040‑27633087",
    lat: 17.4115,
    lng: 78.4840
  },
  {
    name: "NTR Memorial Trust Blood Bank (Banjara Hills, Hyderabad)",
    district: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    contact: "040‑30799999",
    lat: 17.4200,
    lng: 78.4220
  },
  {
    name: "Chiranjeevi Eye & Blood Bank (Jubilee Hills, Hyderabad)",
    district: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    contact: "040‑23555005",
    lat: 17.4325,
    lng: 78.3910
  },
  {
    name: "RTC Hospital Blood Bank (Tarnaka, Hyderabad)",
    district: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    contact: "040‑27018691",
    lat: 17.4208,
    lng: 78.5252
  },
  {
    name: "Sri Devi Charitable Trust Blood Bank (Tarnaka, Hyderabad)",
    district: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    contact: "040‑27016016",
    lat: 17.4250,
    lng: 78.5300
  },
  {
    name: "Gandhi Hospital Blood Bank (Secunderabad)",
    district: "Secunderabad",
    city: "Secunderabad",
    state: "Telangana",
    contact: "040‑27718888",
    lat: 17.4570,
    lng: 78.5024
  },
  // ────── Jammu & Kashmir ──────
  {
    name: "Government Medical College & Hospital Blood Bank",
    district: "Jammu",
    city: "Jammu",
    state: "Jammu & Kashmir",
    contact: "0191‑2584290",
    lat: 32.7333,
    lng: 74.8560
  },
  {
    name: "Sri Maharaja Gulab Singh (SMGS) Hospital Blood Bank",
    district: "Jammu",
    city: "Jammu",
    state: "Jammu & Kashmir",
    contact: "0191‑2547635",
    lat: 32.7260,
    lng: 74.8570
  },
  {
    name: "Acharya Shri Chander College of Medical Sciences Blood Bank",
    district: "Jammu",
    city: "Sidhra",
    state: "Jammu & Kashmir",
    contact: "0191‑2662324",
    lat: 32.7470,
    lng: 74.8770
  },
  {
    name: "92 Base Hospital Blood Bank",
    district: "Srinagar",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    contact: "0194‑24660009",
    lat: 34.0650,
    lng: 74.7880
  },
  {
    name: "SMHS Hospital Blood Bank",
    district: "Srinagar",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    contact: "0194‑2452177", // estimated central hospital line
    lat: 34.0875,
    lng: 74.7973
  },
  {
    name: "Indian Red Cross Society Blood Bank (Srinagar)",
    district: "Srinagar",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    contact: "0194‑2473910",
    lat: 34.0810,
    lng: 74.7890
  }

];
async function loadBloodBanks() {
  try {
    const res = await fetch('https://api.rootnet.in/covid19-in/hospitals/blood-banks');
    const json = await res.json();
    fullData = json.data.regional.map(bank => ({
      ...bank,
      stock: {
        A_pos: getRandomStock(),
        A_neg: getRandomStock(),
        B_pos: getRandomStock(),
        B_neg: getRandomStock(),
        AB_pos: getRandomStock(),
        AB_neg: getRandomStock(),
        O_pos: getRandomStock(),
        O_neg: getRandomStock()
      }
    }));
  } catch (e) {
    console.warn("API failed. Using fallback data.", e);
    fullData = fallbackData; // already has stock
  }
  populateStates();
}


const allStates = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa',
  'Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
  'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
  'Uttar Pradesh','Uttarakhand','West Bengal','Chandigarh','Delhi','Jammu & Kashmir'
];

const rand   = max => Math.floor(Math.random() * max);
const stocks = () => ({
  A_pos : rand(50), A_neg : rand(50),
  B_pos : rand(50), B_neg : rand(50),
  AB_pos: rand(50), AB_neg: rand(50),
  O_pos : rand(50), O_neg : rand(50)
});

/* ──────────── 3.  Global state ──────────── */
let fullData      = [];   // complete list (API or fallback)
let currentState  = '';   // selected state string
let searchQuery   = '';   // current text in search bar

/* ──────────── 4.  Data loader ──────────── */
async function loadBloodBanks() {
  try {
    const res  = await fetch('https://api.rootnet.in/covid19-in/hospitals/blood-banks');
    const json = await res.json();

    fullData = json.data.regional.map(b => ({
      name    : b.name,
      district: b.district,
      city    : b.city,
      state   : b.state,
      contact : b.phone || 'N/A',
      lat     : Number(b.lat)  || null,
      lng     : Number(b.long) || null,
      stock   : stocks()
    }));
  } catch (err) {
    console.warn('API failed – using fallback.', err);
    fullData = fallbackData.map(b => ({ ...b, stock: stocks() }));
  }

  populateStates();
  applyFilters(); // render table and map after data load
  document.dispatchEvent(new Event('bloodDataReady'));
}


/* ──────────── 5.  UI: state dropdown ──────────── */
function populateStates() {
  const sel = document.getElementById('state');
  sel.innerHTML = `
    <option value="__none__" selected>Select State</option>
    <option value="__all__">All States</option>
    ${allStates.map(s => `<option value="${s}">${s}</option>`).join('')}
  `;

  sel.disabled = false;

  sel.addEventListener('change', e => {
    const value = e.target.value;
    if (value === '__none__') {
      currentState = ''; // Default option selected → treat as no state
    } else {
      currentState = value; // "__all__" or specific state
    }
    applyFilters();
  });
}




/* ──────────── 6.  UI: search box ──────────── */
document.getElementById('searchBar')
  .addEventListener('input', e => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

/* ──────────── 7.  Combined filter + render ──────────── */
function applyFilters() {
  let data = fullData;
  const noSearch = !searchQuery || searchQuery === '';

  // 🛑 If "Select State" and no search → show nothing
  if (currentState === '' && noSearch) {
    displayTable([]);
    if (typeof drawMarkers === 'function') drawMarkers([]);
    return;
  }

  // ✅ Filter by specific state (but skip if "All States")
  if (currentState !== '__all__' && currentState !== '') {
    data = data.filter(b => b.state === currentState);
  }

  // ✅ Apply search query
  if (!noSearch) {
    data = data.filter(b =>
      (b.name     && b.name.toLowerCase().includes(searchQuery)) ||
      (b.city     && b.city.toLowerCase().includes(searchQuery)) ||
      (b.district && b.district.toLowerCase().includes(searchQuery))
    );
  }

  displayTable(data);
  if (typeof drawMarkers === 'function') drawMarkers(data);
}



/* ──────────── 8.  Table renderer ──────────── */
function displayTable(list) {
  const tbody = document.querySelector('#results tbody');
  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="6" class="text-center text-danger">' +
      'No matching blood banks found.</td></tr>';
    return;
  }

  list.forEach(b => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${b.name}</td>
      <td>${b.district}</td>
      <td>${b.city}</td>
      <td>${b.contact}</td>
      <td>
        A+: ${b.stock.A_pos} &nbsp; A‑: ${b.stock.A_neg}<br>
        B+: ${b.stock.B_pos} &nbsp; B‑: ${b.stock.B_neg}<br>
        AB+: ${b.stock.AB_pos} AB‑: ${b.stock.AB_neg}<br>
        O+: ${b.stock.O_pos} &nbsp; O‑: ${b.stock.O_neg}
      </td>
      <td><a href="tel:${b.contact}" class="btn btn-danger btn-sm">Call</a></td>
    `;
    tbody.appendChild(tr);
  });
}

/* ──────────── 9.  Kick‑off ──────────── */
document.addEventListener('DOMContentLoaded', loadBloodBanks);
/* ──────────── 10. Google‑Map Helpers ──────────── */
let map;                 // Google Map instance
let mapMarkers = [];     // Keep marker refs so we can clear
let isDark = false;      // Dark mode toggle state

// Called by Google script with callback=initMap
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 22.9734, lng: 78.6569 },
    zoom: 5,
    mapTypeControl: false,
    styles: isDark ? darkMapStyle : null
  });

  // Show user's current position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const userPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      new google.maps.Marker({
        position: userPos,
        map,
        title: "You are here",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });
    });
  }

  // Wait for blood bank data
  if (window.fullData?.length) drawMarkers(window.fullData);
  else document.addEventListener('bloodDataReady', () => drawMarkers(window.fullData));
}

// Draw/re-draw markers for a given list
function drawMarkers(list = []) {
  // Clear old markers
  mapMarkers.forEach(m => m.setMap(null));
  mapMarkers = [];

  list.forEach(bank => {
    if (!bank.lat || !bank.lng) return;

    const marker = new google.maps.Marker({
      position: { lat: bank.lat, lng: bank.lng },
      map,
      title: bank.name,
      icon: {
        url: "images/blood-drop.png",
        scaledSize: new google.maps.Size(28, 28)
      }
    });

    const popup = new google.maps.InfoWindow({
      content: `
        <div style="max-width:210px">
          <h6 class="mb-1 text-danger">${bank.name}</h6>
          <p class="mb-1"><strong>City:</strong> ${bank.city}</p>
          <p class="mb-1"><strong>Contact:</strong> ${bank.contact}</p>
          <p class="mb-0"><strong>Stock O+:</strong> ${bank.stock?.O_pos || 'N/A'} units</p>
        </div>`
    });

    marker.addListener('click', () => popup.open(map, marker));
    mapMarkers.push(marker);
  });

  // Auto zoom to fit all markers
  if (mapMarkers.length) {
    const bounds = new google.maps.LatLngBounds();
    mapMarkers.forEach(m => bounds.extend(m.getPosition()));
    map.fitBounds(bounds);
  }
}

/* Optional Dark Mode Style */
const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  // You can add more styling here
];

/* ========== Hero Section Background Rotation ========== */
const heroImages = ['images/bg8.jpg'];
let bgIndex = 0;

function rotateBackground() {
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.backgroundImage = `url('${heroImages[bgIndex]}')`;
    bgIndex = (bgIndex + 1) % heroImages.length;
  }
}

/* ========== DOM Ready Bootstrapping ========== */
document.addEventListener('DOMContentLoaded', () => {
  // Hero Background
  rotateBackground();
  setInterval(rotateBackground, 2000);

  // Speed up hero video
  const video = document.querySelector('video');
  if (video) video.playbackRate = 1.5;

  // Lazy-load About content
  fetch('about.html')
    .then(r => r.text())
    .then(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const part = doc.querySelector('.content-section');
      if (part) document.getElementById('aboutContent').appendChild(part);
    })
    .catch(err => console.warn('Error loading about page:', err));

  // AOS animations
  if (typeof AOS !== 'undefined') AOS.init();
});
