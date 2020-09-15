import React from "react";
import { shallow } from 'enzyme';

import Dashboard from "./Dashboard";

describe('<Dashboard />', () => {
  const exampleData = {
    "Message": "",
    "Global": {
      "NewConfirmed": 195999,
      "TotalConfirmed": 29186312,
      "NewDeaths": 3374,
      "TotalDeaths": 927193,
      "NewRecovered": 150217,
      "TotalRecovered": 19772465
    },
    "Countries": [
      {
        "Country": "Zambia",
        "CountryCode": "ZM",
        "Slug": "zambia",
        "NewConfirmed": 181,
        "TotalConfirmed": 13720,
        "NewDeaths": 8,
        "TotalDeaths": 320,
        "NewRecovered": 120,
        "TotalRecovered": 12380,
        "Date": "2020-09-15T13:51:46Z",
        "Premium": {
          "CountryStats": {
            "CountryISO": "ZM",
            "Country": "Zambia",
            "Continent": "Africa",
            "Population": 18383956,
            "PopulationDensity": 22.995,
            "MedianAge": 17.7,
            "Aged65Older": 2.48,
            "Aged70Older": 1.542,
            "ExtremePoverty": 0,
            "GdpPerCapita": 3689.251,
            "CvdDeathRate": 234.499,
            "DiabetesPrevalence": 3.94,
            "HandwashingFacilities": 13.938,
            "HospitalBedsPerThousand": 2,
            "LifeExpectancy": 63.89,
            "FemaleSmokers": 0,
            "MaleSmokers": 0
          }
        }
      },
      {
        "Country": "Zimbabwe",
        "CountryCode": "ZW",
        "Slug": "zimbabwe",
        "NewConfirmed": 5,
        "TotalConfirmed": 7531,
        "NewDeaths": 0,
        "TotalDeaths": 224,
        "NewRecovered": 12,
        "TotalRecovered": 5690,
        "Date": "2020-09-15T13:51:46Z",
        "Premium": {
          "CountryStats": {
            "CountryISO": "ZW",
            "Country": "Zimbabwe",
            "Continent": "Africa",
            "Population": 14862927,
            "PopulationDensity": 42.729,
            "MedianAge": 19.6,
            "Aged65Older": 2.822,
            "Aged70Older": 1.882,
            "ExtremePoverty": 0,
            "GdpPerCapita": 1899.775,
            "CvdDeathRate": 307.846,
            "DiabetesPrevalence": 1.82,
            "HandwashingFacilities": 36.791,
            "HospitalBedsPerThousand": 1.7,
            "LifeExpectancy": 61.49,
            "FemaleSmokers": 0,
            "MaleSmokers": 0
          }
        }
      }
    ],
    "Date": "2020-09-15T13:51:46Z"
  }
  const summaryData = [{
    "Country": "Zambia",
    "CountryCode": "ZM",
    "Slug": "zambia",
    "NewConfirmed": 181,
    "TotalConfirmed": 13720,
    "NewDeaths": 8,
    "TotalDeaths": 320,
    "NewRecovered": 120,
    "TotalRecovered": 12380,
    "Date": "2020-09-15T13:51:46Z",
  },
  {
    "Country": "Zimbabwe",
    "CountryCode": "ZW",
    "Slug": "zimbabwe",
    "NewConfirmed": 5,
    "TotalConfirmed": 7531,
    "NewDeaths": 0,
    "TotalDeaths": 224,
    "NewRecovered": 12,
    "TotalRecovered": 5690,
    "Date": "2020-09-15T13:51:46Z",
  }];
  it('check default state values', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.state().summaryData).toMatchObject([]);
  });

  it('check function analyzeData', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.instance().analyzeData(exampleData);
    expect(wrapper.state().summaryData).toMatchObject(summaryData);
  });
});