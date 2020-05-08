const stateToNameMapper = ({state}) => {
  switch (state) {
    case "AK":
      return "Alaska";
    case "AL":
      return "Alabama";
    case "AR":
      return "Arkansas";
    case "AS":
      return "American Samoa";
    case "AZ":
      return "Arizona";
    case "CA":
      return "California";
    case "CO":
      return "Colorado";
    case "CT":
      return "Connecticut";
    case "DC":
      return "District Of Columbia";
    case "DE":
      return "Delaware";
    case "FL":
      return "Florida";
    case "GA":
      return "Georgia";
    case "GU":
      return "Guam";
    case "HI":
      return "Hawaii";
    case "IA":
      return "Iowa";
    case "ID":
      return "Idaho";
    case "IL":
      return "Illinois";
    case "IN":
      return "Indiana";
    case "KS":
      return "Kansas";
    case "KY":
      return "Kentucky";
    case "LA":
      return "Louisiana";
    case "MA":
      return "Massachusetts";
    case "MD":
      return "Maryland";
    case "ME":
      return "Maine";
    case "MI":
      return "Michigan";
    case "MN":
      return "Minnesota";
    case "MO":
      return "Missouri";
    case "MP":
      return "Northern Mariana Islands";
    case "MS":
      return "Mississippi";
    case "MT":
      return "Montana";
    case "NC":
      return "North Carolina";
    case "ND":
      return "North Dakota";
    case "NE":
      return "Nebraska";
    case "NH":
      return "New Hampshire";
    case "NJ":
      return "New Jersey";
    case "NM":
      return "New Mexico";
    case "NV":
      return "Nevada";
    case "NY":
      return "New York";
    case "OH":
      return "Ohio";
    case "OK":
      return "Oklahoma";
    case "OR":
      return "Oregon";
    case "PA":
      return "Pennsylvania";
    case "PR":
      return "Puerto Rico";
    case "RI":
      return "Rhode Island";
    case "SC":
      return "South Carolina";
    case "SD":
      return "South Dakota";
    case "TN":
      return "Tennessee";
    case "TX":
      return "Texas";
    case "UT":
      return "Utah";
    case "VA":
      return "Virginia";
    case "VI":
      return "US Virgin Islands";
    case "VT":
      return "Vermont";
    case "WA":
      return "Washington";
    case "WI":
      return "Wisconsin";
    case "WV":
      return "West Virginia";
    case "WY":
      return "Wyoming";
  }
};

module.exports = stateToNameMapper;