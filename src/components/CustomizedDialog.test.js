import React from "react";
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CustomizedDialog from "./CustomizedDialog";

describe('<CustomizedDialog />', () => {
  it('allows us to set props', () => {
    const wrapper = shallow(<CustomizedDialog isOpenDialog={false} detailData={{}} />);
    expect(wrapper.props().isOpenDialog).toEqual(false);
    wrapper.setProps({ isOpenDialog: true });
    expect(wrapper.props().isOpenDialog).toEqual(true);
  });

  it('simulates click events', () => {
    const handleClose = sinon.spy();
    const wrapper = shallow((
      <CustomizedDialog isOpenDialog={true} detailData={{}} handleClose={handleClose} />
    ));
    console.log(wrapper.html())
    wrapper.find('.MuiButton-textPrimary').simulate('click');
    expect(handleClose).toHaveProperty('callCount', 1);
  });
});