import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import store from '../store';
import { HashRouter as Router } from 'react-router-dom';

import SectionHeading from '../common/components/SectionHeading';

const propsData = {
  headingText: 'Rooms',
  showViewAll: true,
  viewAllLink: 'rooms',
};
const propsDataWOLink = {
  headingText: 'Rooms',
  showViewAll: false,
  viewAllLink: 'rooms',
};

describe('Test section heading component', () => {
  it('Should render Section Heading', () => {
    render(
      <Router>
        <Provider store={store}>
          <SectionHeading {...propsData} />
        </Provider>
      </Router>
    );

    const sectionHeadingText = screen.getByText(propsData.headingText);

    expect(sectionHeadingText).toBeInTheDocument();

    expect(screen.getByRole("link", {name: "View All"})).toHaveAttribute("href", "#/rooms");
  });

  it('Should render Section Heading without link', () => {
    render(
      <Router>
        <Provider store={store}>
          <SectionHeading {...propsDataWOLink} />
        </Provider>
      </Router>
    );

    const sectionHeadingText = screen.getByText(propsDataWOLink.headingText);

    expect(sectionHeadingText).toBeInTheDocument();

    expect(screen.queryByRole("link", {name: "View All"})).not.toBeInTheDocument();
  });
});
