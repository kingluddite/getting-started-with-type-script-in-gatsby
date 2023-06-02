import React from 'react';
import { render } from '@testing-library/react';
import StudentScholarshipPage from './index';
import { describe, it } from 'vitest';

describe(`StudentScholarshipPage`, () => {
  it(`renders without errors`, () => {
    const data = {
      scholarshipPage: {
        name: `Scholarship`,
        headingOne: `Sample Heading`,
        subheading: `Sample Subheading`,
        headingOneButtonText: `Sample Button Text`,
        headingOneButtonPath: `/`,
        headingTwo: `Sample Heading Two`,
        scholarshipTextBlock: `<p>Sample Scholarship Text Block</p>`,
        scholarshipCriteriaBlock: {
          scholarshipCriteriaTextBlock: `<p>Sample Criteria Text Block</p>`,
          scholarshipCriteriaBlockHeading: `Sample Criteria Heading`,
          callToAction: `Sample Call to Action`,
          callToActionLink: `/sample-link`,
        },
        scholarshipEligibilityBlock: {
          scholarshipEligibilityBlockHeading: `Sample Eligibility Heading`,
          scholarshipEligibilityTextBlock: `<p>Sample Eligibility Text Block</p>`,
          callToAction: `Sample Call to Action`,
          callToActionLink: `/sample-link`,
        },
        scholarshipAppRequirementBlock: {
          scholarshipAppRequirementBlockHeading: `Sample App Requirement Heading`,
          scholarshipAppRequirementTextBlock: `<p>Sample App Requirement Text Block</p>`,
          callToAction: `Sample Call to Action`,
          callToActionLink: `/sample-link`,
        },
        scholarshipSelectionBlock: {
          scholarshipSelectionProcessBlockHeading: `Sample Selection Heading`,
          scholarshipSelectionProcessTextBlock: `<p>Sample Selection Text Block</p>`,
          callToAction: `Sample Call to Action`,
          callToActionLink: `/sample-link`,
        },
        scholarshipRequirementForStudentBlock: {
          scholarshipRequirementBlockHeading: `Sample Requirement Heading`,
          scholarshipRequirementForStudentTextBlock: `<p>Sample Requirement Text Block</p>`,
          callToAction: `Sample Call to Action`,
          callToActionLink: `/sample-link`,
        },
      },
    };

    render(<StudentScholarshipPage data={data} />);
    // Add assertions to check if the component renders as expected
  });
});
