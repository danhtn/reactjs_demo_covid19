import React from "react";
import { shallow } from 'enzyme';

import SummaryTable from "./SummaryTable";

describe('<SummaryTable />', () => {
  const exampleData = {
    "Country": "Afghanistan",
    "CountryCode": "AF",
    "Slug": "afghanistan",
    "NewConfirmed": 56,
    "TotalConfirmed": 38772,
    "NewDeaths": 5,
    "TotalDeaths": 1425,
    "NewRecovered": 435,
    "TotalRecovered": 32073,
    "Date": "2020-09-15T15:49:56Z",
    "tableData": {
      "id": 0
    }
  }
  const summaryData = [{
    "Country": "Afghanistan",
    "CountryCode": "AF",
    "Slug": "afghanistan",
    "NewConfirmed": 56,
    "TotalConfirmed": 38772,
    "NewDeaths": 5,
    "TotalDeaths": 1425,
    "NewRecovered": 435,
    "TotalRecovered": 32073,
    "Date": "2020-09-15T16:24:11Z"
  }]
  it('check default state values', () => {
    const wrapper = shallow(<SummaryTable summaryData={summaryData} />);
    expect(wrapper.state().isOpenDialog).toEqual(false);
    expect(wrapper.state().detailData).toMatchObject({});
  });

  it('check function handleClickOpen', () => {
    const wrapper = shallow(<SummaryTable summaryData={summaryData} />);
    wrapper.instance().handleClickOpen(exampleData);
    expect(wrapper.state().isOpenDialog).toEqual(true);
    const { tableData, ...filteredValue } = exampleData
    expect(wrapper.state().detailData).toMatchObject(filteredValue);
  });
  it('check function handleClose', () => {
    const wrapper = shallow(<SummaryTable summaryData={summaryData} />);
    wrapper.instance().handleClose();
    expect(wrapper.state().isOpenDialog).toEqual(false);
  });
});