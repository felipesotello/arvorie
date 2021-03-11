var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FBF9E8",
    background_transparent: "",
    border_color: "#ffffff",
    popups: "detect",
    state_description: "",
    state_color: "#99BF7C",
    state_hover_color: "#99BF7C",
    state_url: "",
    border_size: "1",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "red",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "transparent",
    label_hover_color: "transparent",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 1,
    popup_shadow: 1,
    popup_corners: 4,
    popup_font: "12px/1.5 white",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: "#167EDF",
    border_hover_size: "3"
  },
  state_specific: {
    HI: {
      name: "Hawaii"
    },
    AK: {
      name: "Alaska"
    },
    FL: {
      name: "Florida"
    },
    NH: {
      name: "New Hampshire"
    },
    VT: {
      name: "Vermont"
    },
    ME: {
      name: "Maine"
    },
    RI: {
      name: "Rhode Island",
      color: "#4C603E",
      hover_color: "#4C603E"
    },
    NY: {
      name: "New York",
      color: "#4C603E",
      hover_color: "#4C603E"
    },
    PA: {
      name: "Pennsylvania"
    },
    NJ: {
      name: "New Jersey"
    },
    DE: {
      name: "Delaware"
    },
    MD: {
      name: "Maryland",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    VA: {
      name: "Virginia",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    WV: {
      name: "West Virginia"
    },
    OH: {
      name: "Ohio"
    },
    IN: {
      name: "Indiana"
    },
    IL: {
      name: "Illinois",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    CT: {
      name: "Connecticut",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    WI: {
      name: "Wisconsin"
    },
    NC: {
      name: "North Carolina"
    },
    DC: {
      name: "District of Columbia"
    },
    MA: {
      name: "Massachusetts"
    },
    TN: {
      name: "Tennessee"
    },
    AR: {
      name: "Arkansas",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    MO: {
      name: "Missouri"
    },
    GA: {
      name: "Georgia",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    SC: {
      name: "South Carolina",
      color: "#4C603E",
      hover_color: "#4C603E"
    },
    KY: {
      name: "Kentucky"
    },
    AL: {
      name: "Alabama"
    },
    LA: {
      name: "Louisiana",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    MS: {
      name: "Mississippi",
      color: "#4C603E",
      hover_color: "#4C603E"
    },
    IA: {
      name: "Iowa"
    },
    MN: {
      name: "Minnesota"
    },
    OK: {
      name: "Oklahoma"
    },
    TX: {
      name: "Texas"
    },
    NM: {
      name: "New Mexico",
      color: "#4C603E",
      hover_color: "#4C603E"
    },
    KS: {
      name: "Kansas",
      color: "#4C603E",
      hover_color: "#4C603E"
    },
    NE: {
      name: "Nebraska",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    SD: {
      name: "South Dakota"
    },
    ND: {
      name: "North Dakota"
    },
    WY: {
      name: "Wyoming"
    },
    MT: {
      name: "Montana",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    CO: {
      name: "Colorado",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    UT: {
      name: "Utah"
    },
    AZ: {
      name: "Arizona"
    },
    NV: {
      name: "Nevada"
    },
    OR: {
      name: "Oregon",
      color: "#738F5D",
      hover_color: "#738F5D"
    },
    WA: {
      name: "Washington"
    },
    CA: {
      name: "California"
    },
    MI: {
      name: "Michigan"
    },
    ID: {
      name: "Idaho"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {},
  labels: {
    NH: {
      x: "932",
      y: "183",
      width: 45,
      parent_id: "NH"
    },
    VT: {
      x: "883",
      y: "243",
      width: 45,
      parent_id: "VT"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      width: 45
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      width: 45
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      width: 45
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      width: 45
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      width: 45
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      width: 45
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      width: 45
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  regions: {}
};