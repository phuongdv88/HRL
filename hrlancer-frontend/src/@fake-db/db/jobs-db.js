import mock from './../mock';
import _ from '@lodash';
import {amber, blue, blueGrey, green} from '@material-ui/core/colors';

const jobDescriptions= [
    {
        'id'     : '0',
        'logoLink': '/static/client-logo/aelkjliu.png',
        'title'  : 'Product Manager cum Business Development ',
        'employer': 'Rapbank',
        'reward': '10.000.000 VND',
        'numberVacancies': '2',
        'salary': 'From 3000 USD',
        'levels': 'Team Leader',
        'numberCVsProcessing': '3',
        'jobType': 'Hot',
        'location':'Hanoi',
        'address': '234 Hoang Quoc Viet',
        'brief': `We are looking for the core team member/co-founder as the Product Manager cum Business Development to build the product and technology for the running operations, manage systems and its maintenance regularly.
        - Be a good-tempered, optimistic, traditional yet visionary hard-worker (like the Rapbank founder).`,
        'description': `
        (Product Management)
        - Responsible for full product development tasks such as analyzing, conceptualizing, prototyping
        - Drive data collection (define and own metrics), user feedback and market research to shape the product direction. Collect data is necessary to inform product idea, might be in the form of competitive intelligence, merchant behavior, business metrics or merchant's feedback.
        - Own the creation and documentation of product requirements and specifications.
        - Define vision and be responsible for strategy, roadmap and feature definition of your product.
        - Build-up & incharge end-to-end one of the key features of Rapbank product (ex: billing, top-up, ...) from ideas, development, rollout, and optimization of the product.
        - Coordinate and interface with other teams in the organization to implement the product design.
        - Work closely with BI team to formulate strategic insights and propose action plans to achieve business objectives.
        - Work closely with Technical team to implement the product ideas. Join with Marketing & BD team to launch & grow-hack the feature.
        - Work closely alongside different parts of the organization partnering with design, engineering, marketing, editorial, and partnerships teams to create extraordinary products
        - Own the Quality Assurance process as new products and features are released`,
        'requirement': `Passion and/or significant interest in financial inclusion/banking.
        - Experienced working on internet technology product company, from E-commerce or Fintech or Banking.
        - Experience working at startups, demonstrated success navigating fast pace and rapidly changing environments.
        - Strong communication skills you should be able to articulate your opinions confidently and with support
        - Excellent leadership skills and ability to build strong relationships across distinct stakeholders
        
        (Product Management)
        - 2+ years of experience in product building, and strong foundations and understanding of technology.
        - Keen product intuition and UX design sensibilities, with a strong desire to discover and fulfill the needs of users
        - Strong balance of both analytical and creative thinking
        - Great taste and aesthetic sensibility
        - Passionate about iterative development with an interest in honing product instincts through feedback, user, and A/B testing
        - Launched at least one successful product
        
        (Business Development)
        - Understanding of lending and payments space
        - Have experience in Business development or developing strategic partnerships for payment, card or e-banking operations, in banks or e-payment firms.
        - Experience in driving and implementing the business project;`,
        'benefit':`- Be involved in Rapbank - expected to be one of the leading e-banking and p2p lending products in Vietnam.
        - Work with leaders/colleagues who are experts in Banking.
        - Expand your network to heads of banks.
        - Leave days: 24 days/year
        - Insurance according to Vietnam laws
        - Exceptional talent will be matched with exceptional salary.
        - Competitive benefits package
        - Company trip
        - Free Grab to work
        
        3 REASONS WHY YOU WILL LOVE RAPBANK:
        - Incredible, humane challenges
        - A great chance to impact millions of lives
        - Passionate & professional colleagues.`,
        'cvRequire': true,
        'reportTo':'Operations Head',
        'NoticeForReferer':`We are Dreamplex, a Space for Success. As a coworking space, we aim to create an environment where our members can be as productive as they can be, collaborate with the community, and enjoy waking up every day and coming to work to take another step forward in their success story. 
                            To continue perfecting that environment, we start from the inside. We strive to provide our team with everything necessary for better work-life integration and fulfillment, from opportunities for learning and growth to a variety of exciting and exclusive benefits. With plans to expand, we are now hiring brilliant minds to be a part of our Dreambuilding family. `



    },
    {
        'id'     : '1',
        'logoLink': '/static/client-logo/aelkjliu.png',
        'title'  : 'Member Experience Manager',
        'employer': 'Dreamplex',
        'reward': '10.000.000 VND',
        'numberVacancies': '2',
        'salary': 'From 3000 USD',
        'levels': 'Team Leader',
        'numberCVsProcessing': '3',
        'jobType': 'Hot',
        'location':'Ho Chi Minh',
        'address': '234 Hoang Quoc Viet',
        'brief': `Do you get inspired by seeing people around you succeed, and do you care about providing the right environment, opportunities, and experience for them to do so? As our Member Experience Manager, you will be doing just that, by internalizing what it means to be a “Space for Success.”
                        Being the face of Dreamplex comes with some exciting tasks, such as: 
                        - Creating a fun, inspiring, and welcoming environment for our members and guests.
                        - Engaging the community, assisting in bringing people together, and creating a sense of belonging.
                        - Coordinating and executing engaging events and gatherings.
                        - Providing a “Member Obsessed” level of service and coaching others to do the same.
                        - Thinking outside the box to make huge fans out of our members.
                        - Managing the Member Experience Team (including communication, scheduling, data and analytics reporting, strategy).
                        - Collaborating with fellow Member Experience Managers, reporting and discussing strategy with leadership.
                        - Building relationships and coordinating with landlords, local agencies and government officials to adhere to building standards and regulations.
                        - Coordinating with other departments including sales, marketing, accounting, HR, IT, for various projects.
                        - Managing and monitoring budgets, long-term strategy and business plans.
                        - Managing members needs and billing via coworking management software.
                        - Flexibility to work across all locations, at varying time schedules. `,
        'requirement': `- 5+ years of hospitality and guest relations or retail and customer service experience
                        - Facilities management exp
                        - Ability to manage a budget
                        - Genuine care for people and a want for providing the best experience 
                        - Easy going, bubbly, and open with communication 
                        - Ability to think on your feet, critically and creatively
                        - Equal ability to work autonomously and on a team`,
        'benefit':`- Working in a startup that’s moving fast and making waves
                    - Opportunity to grow as we grow
                    - A collaborative and caring team
                    - Competitive compensation & benefits
                    - Working in a growing industry and being a part of the cause for success for thousands of entrepreneurs a`,
        'cvRequire': true,
        'reportTo':'Operations Head',
        'NoticeForReferer':`We are Dreamplex, a Space for Success. As a coworking space, we aim to create an environment where our members can be as productive as they can be, collaborate with the community, and enjoy waking up every day and coming to work to take another step forward in their success story. 
                            To continue perfecting that environment, we start from the inside. We strive to provide our team with everything necessary for better work-life integration and fulfillment, from opportunities for learning and growth to a variety of exciting and exclusive benefits. With plans to expand, we are now hiring brilliant minds to be a part of our Dreambuilding family. `

    },
    {
        'id'     : '2',
        'logoLink': '/static/client-logo/aelkjliu.png',
        'title'  : 'Product Manager cum Business Development ',
        'employer': 'Rapbank',
        'reward': '10.000.000 VND',
        'numberVacancies': '2',
        'salary': 'From 3000 USD',
        'levels': 'Team Leader',
        'numberCVsProcessing': '3',
        'jobType': 'Hot',
        'location':'Hanoi',
        'address': '234 Hoang Quoc Viet',
        'brief': `We are looking for the core team member/co-founder as the Product Manager cum Business Development to build the product and technology for the running operations, manage systems and its maintenance regularly.
        - Be a good-tempered, optimistic, traditional yet visionary hard-worker (like the Rapbank founder).`,
        'description': `
        (Product Management)
        - Responsible for full product development tasks such as analyzing, conceptualizing, prototyping
        - Drive data collection (define and own metrics), user feedback and market research to shape the product direction. Collect data is necessary to inform product idea, might be in the form of competitive intelligence, merchant behavior, business metrics or merchant's feedback.
        - Own the creation and documentation of product requirements and specifications.
        - Define vision and be responsible for strategy, roadmap and feature definition of your product.
        - Build-up & incharge end-to-end one of the key features of Rapbank product (ex: billing, top-up, ...) from ideas, development, rollout, and optimization of the product.
        - Coordinate and interface with other teams in the organization to implement the product design.
        - Work closely with BI team to formulate strategic insights and propose action plans to achieve business objectives.
        - Work closely with Technical team to implement the product ideas. Join with Marketing & BD team to launch & grow-hack the feature.
        - Work closely alongside different parts of the organization partnering with design, engineering, marketing, editorial, and partnerships teams to create extraordinary products
        - Own the Quality Assurance process as new products and features are released`,
        'requirement': `Passion and/or significant interest in financial inclusion/banking.
        - Experienced working on internet technology product company, from E-commerce or Fintech or Banking.
        - Experience working at startups, demonstrated success navigating fast pace and rapidly changing environments.
        - Strong communication skills you should be able to articulate your opinions confidently and with support
        - Excellent leadership skills and ability to build strong relationships across distinct stakeholders
        
        (Product Management)
        - 2+ years of experience in product building, and strong foundations and understanding of technology.
        - Keen product intuition and UX design sensibilities, with a strong desire to discover and fulfill the needs of users
        - Strong balance of both analytical and creative thinking
        - Great taste and aesthetic sensibility
        - Passionate about iterative development with an interest in honing product instincts through feedback, user, and A/B testing
        - Launched at least one successful product
        
        (Business Development)
        - Understanding of lending and payments space
        - Have experience in Business development or developing strategic partnerships for payment, card or e-banking operations, in banks or e-payment firms.
        - Experience in driving and implementing the business project;`,
        'benefit':`- Be involved in Rapbank - expected to be one of the leading e-banking and p2p lending products in Vietnam.
        - Work with leaders/colleagues who are experts in Banking.
        - Expand your network to heads of banks.
        - Leave days: 24 days/year
        - Insurance according to Vietnam laws
        - Exceptional talent will be matched with exceptional salary.
        - Competitive benefits package
        - Company trip
        - Free Grab to work
        
        3 REASONS WHY YOU WILL LOVE RAPBANK:
        - Incredible, humane challenges
        - A great chance to impact millions of lives
        - Passionate & professional colleagues.`,
        'cvRequire': true,
        'reportTo':'Operations Head',
        'NoticeForReferer':`We are Dreamplex, a Space for Success. As a coworking space, we aim to create an environment where our members can be as productive as they can be, collaborate with the community, and enjoy waking up every day and coming to work to take another step forward in their success story. 
                            To continue perfecting that environment, we start from the inside. We strive to provide our team with everything necessary for better work-life integration and fulfillment, from opportunities for learning and growth to a variety of exciting and exclusive benefits. With plans to expand, we are now hiring brilliant minds to be a part of our Dreambuilding family. `



    },
    {
        'id'     : '3',
        'logoLink': '/static/client-logo/aelkjliu.png',
        'title'  : 'Product Manager cum Business Development ',
        'employer': 'Rapbank',
        'reward': '10.000.000 VND',
        'numberVacancies': '2',
        'salary': 'From 3000 USD',
        'levels': 'Team Leader',
        'numberCVsProcessing': '3',
        'jobType': 'Hot',
        'location':'Hanoi',
        'address': '234 Hoang Quoc Viet',
        'brief': `We are looking for the core team member/co-founder as the Product Manager cum Business Development to build the product and technology for the running operations, manage systems and its maintenance regularly.
        - Be a good-tempered, optimistic, traditional yet visionary hard-worker (like the Rapbank founder).`,
        'description': `
        (Product Management)
        - Responsible for full product development tasks such as analyzing, conceptualizing, prototyping
        - Drive data collection (define and own metrics), user feedback and market research to shape the product direction. Collect data is necessary to inform product idea, might be in the form of competitive intelligence, merchant behavior, business metrics or merchant's feedback.
        - Own the creation and documentation of product requirements and specifications.
        - Define vision and be responsible for strategy, roadmap and feature definition of your product.
        - Build-up & incharge end-to-end one of the key features of Rapbank product (ex: billing, top-up, ...) from ideas, development, rollout, and optimization of the product.
        - Coordinate and interface with other teams in the organization to implement the product design.
        - Work closely with BI team to formulate strategic insights and propose action plans to achieve business objectives.
        - Work closely with Technical team to implement the product ideas. Join with Marketing & BD team to launch & grow-hack the feature.
        - Work closely alongside different parts of the organization partnering with design, engineering, marketing, editorial, and partnerships teams to create extraordinary products
        - Own the Quality Assurance process as new products and features are released`,
        'requirement': `Passion and/or significant interest in financial inclusion/banking.
        - Experienced working on internet technology product company, from E-commerce or Fintech or Banking.
        - Experience working at startups, demonstrated success navigating fast pace and rapidly changing environments.
        - Strong communication skills you should be able to articulate your opinions confidently and with support
        - Excellent leadership skills and ability to build strong relationships across distinct stakeholders
        
        (Product Management)
        - 2+ years of experience in product building, and strong foundations and understanding of technology.
        - Keen product intuition and UX design sensibilities, with a strong desire to discover and fulfill the needs of users
        - Strong balance of both analytical and creative thinking
        - Great taste and aesthetic sensibility
        - Passionate about iterative development with an interest in honing product instincts through feedback, user, and A/B testing
        - Launched at least one successful product
        
        (Business Development)
        - Understanding of lending and payments space
        - Have experience in Business development or developing strategic partnerships for payment, card or e-banking operations, in banks or e-payment firms.
        - Experience in driving and implementing the business project;`,
        'benefit':`- Be involved in Rapbank - expected to be one of the leading e-banking and p2p lending products in Vietnam.
        - Work with leaders/colleagues who are experts in Banking.
        - Expand your network to heads of banks.
        - Leave days: 24 days/year
        - Insurance according to Vietnam laws
        - Exceptional talent will be matched with exceptional salary.
        - Competitive benefits package
        - Company trip
        - Free Grab to work
        
        3 REASONS WHY YOU WILL LOVE RAPBANK:
        - Incredible, humane challenges
        - A great chance to impact millions of lives
        - Passionate & professional colleagues.`,
        'cvRequire': true,
        'reportTo':'Operations Head',
        'NoticeForReferer':`We are Dreamplex, a Space for Success. As a coworking space, we aim to create an environment where our members can be as productive as they can be, collaborate with the community, and enjoy waking up every day and coming to work to take another step forward in their success story. 
                            To continue perfecting that environment, we start from the inside. We strive to provide our team with everything necessary for better work-life integration and fulfillment, from opportunities for learning and growth to a variety of exciting and exclusive benefits. With plans to expand, we are now hiring brilliant minds to be a part of our Dreambuilding family. `



    },
    {
        'id'     : '4',
        'logoLink': '/static/client-logo/aelkjliu.png',
        'title'  : 'Product Manager cum Business Development ',
        'employer': 'Rapbank',
        'reward': '10.000.000 VND',
        'numberVacancies': '2',
        'salary': 'From 3000 USD',
        'levels': 'Team Leader',
        'numberCVsProcessing': '3',
        'jobType': 'Hot',
        'location':'Hanoi',
        'address': '234 Hoang Quoc Viet',
        'brief': `We are looking for the core team member/co-founder as the Product Manager cum Business Development to build the product and technology for the running operations, manage systems and its maintenance regularly.
        - Be a good-tempered, optimistic, traditional yet visionary hard-worker (like the Rapbank founder).`,
        'description': `
        (Product Management)
        - Responsible for full product development tasks such as analyzing, conceptualizing, prototyping
        - Drive data collection (define and own metrics), user feedback and market research to shape the product direction. Collect data is necessary to inform product idea, might be in the form of competitive intelligence, merchant behavior, business metrics or merchant's feedback.
        - Own the creation and documentation of product requirements and specifications.
        - Define vision and be responsible for strategy, roadmap and feature definition of your product.
        - Build-up & incharge end-to-end one of the key features of Rapbank product (ex: billing, top-up, ...) from ideas, development, rollout, and optimization of the product.
        - Coordinate and interface with other teams in the organization to implement the product design.
        - Work closely with BI team to formulate strategic insights and propose action plans to achieve business objectives.
        - Work closely with Technical team to implement the product ideas. Join with Marketing & BD team to launch & grow-hack the feature.
        - Work closely alongside different parts of the organization partnering with design, engineering, marketing, editorial, and partnerships teams to create extraordinary products
        - Own the Quality Assurance process as new products and features are released`,
        'requirement': `Passion and/or significant interest in financial inclusion/banking.
        - Experienced working on internet technology product company, from E-commerce or Fintech or Banking.
        - Experience working at startups, demonstrated success navigating fast pace and rapidly changing environments.
        - Strong communication skills you should be able to articulate your opinions confidently and with support
        - Excellent leadership skills and ability to build strong relationships across distinct stakeholders
        
        (Product Management)
        - 2+ years of experience in product building, and strong foundations and understanding of technology.
        - Keen product intuition and UX design sensibilities, with a strong desire to discover and fulfill the needs of users
        - Strong balance of both analytical and creative thinking
        - Great taste and aesthetic sensibility
        - Passionate about iterative development with an interest in honing product instincts through feedback, user, and A/B testing
        - Launched at least one successful product
        
        (Business Development)
        - Understanding of lending and payments space
        - Have experience in Business development or developing strategic partnerships for payment, card or e-banking operations, in banks or e-payment firms.
        - Experience in driving and implementing the business project;`,
        'benefit':`- Be involved in Rapbank - expected to be one of the leading e-banking and p2p lending products in Vietnam.
        - Work with leaders/colleagues who are experts in Banking.
        - Expand your network to heads of banks.
        - Leave days: 24 days/year
        - Insurance according to Vietnam laws
        - Exceptional talent will be matched with exceptional salary.
        - Competitive benefits package
        - Company trip
        - Free Grab to work
        
        3 REASONS WHY YOU WILL LOVE RAPBANK:
        - Incredible, humane challenges
        - A great chance to impact millions of lives
        - Passionate & professional colleagues.`,
        'cvRequire': true,
        'reportTo':'Operations Head',
        'NoticeForReferer':`We are Dreamplex, a Space for Success. As a coworking space, we aim to create an environment where our members can be as productive as they can be, collaborate with the community, and enjoy waking up every day and coming to work to take another step forward in their success story. 
                            To continue perfecting that environment, we start from the inside. We strive to provide our team with everything necessary for better work-life integration and fulfillment, from opportunities for learning and growth to a variety of exciting and exclusive benefits. With plans to expand, we are now hiring brilliant minds to be a part of our Dreambuilding family. `


    },
    {
        'id'     : '5',
        'logoLink': '/static/client-logo/aelkjliu.png',
        'title'  : 'Product Manager cum Business Development ',
        'employer': 'Rapbank',
        'reward': '10.000.000 VND',
        'numberVacancies': '2',
        'salary': 'From 3000 USD',
        'levels': 'Team Leader',
        'numberCVsProcessing': '3',
        'jobType': 'Hot',
        'location':'Hanoi',
        'address': '234 Hoang Quoc Viet',
        'brief': `We are looking for the core team member/co-founder as the Product Manager cum Business Development to build the product and technology for the running operations, manage systems and its maintenance regularly.
        - Be a good-tempered, optimistic, traditional yet visionary hard-worker (like the Rapbank founder).`,
        'description': `
        (Product Management)
        - Responsible for full product development tasks such as analyzing, conceptualizing, prototyping
        - Drive data collection (define and own metrics), user feedback and market research to shape the product direction. Collect data is necessary to inform product idea, might be in the form of competitive intelligence, merchant behavior, business metrics or merchant's feedback.
        - Own the creation and documentation of product requirements and specifications.
        - Define vision and be responsible for strategy, roadmap and feature definition of your product.
        - Build-up & incharge end-to-end one of the key features of Rapbank product (ex: billing, top-up, ...) from ideas, development, rollout, and optimization of the product.
        - Coordinate and interface with other teams in the organization to implement the product design.
        - Work closely with BI team to formulate strategic insights and propose action plans to achieve business objectives.
        - Work closely with Technical team to implement the product ideas. Join with Marketing & BD team to launch & grow-hack the feature.
        - Work closely alongside different parts of the organization partnering with design, engineering, marketing, editorial, and partnerships teams to create extraordinary products
        - Own the Quality Assurance process as new products and features are released`,
        'requirement': `Passion and/or significant interest in financial inclusion/banking.
        - Experienced working on internet technology product company, from E-commerce or Fintech or Banking.
        - Experience working at startups, demonstrated success navigating fast pace and rapidly changing environments.
        - Strong communication skills you should be able to articulate your opinions confidently and with support
        - Excellent leadership skills and ability to build strong relationships across distinct stakeholders
        
        (Product Management)
        - 2+ years of experience in product building, and strong foundations and understanding of technology.
        - Keen product intuition and UX design sensibilities, with a strong desire to discover and fulfill the needs of users
        - Strong balance of both analytical and creative thinking
        - Great taste and aesthetic sensibility
        - Passionate about iterative development with an interest in honing product instincts through feedback, user, and A/B testing
        - Launched at least one successful product
        
        (Business Development)
        - Understanding of lending and payments space
        - Have experience in Business development or developing strategic partnerships for payment, card or e-banking operations, in banks or e-payment firms.
        - Experience in driving and implementing the business project;`,
        'benefit':`- Be involved in Rapbank - expected to be one of the leading e-banking and p2p lending products in Vietnam.
        - Work with leaders/colleagues who are experts in Banking.
        - Expand your network to heads of banks.
        - Leave days: 24 days/year
        - Insurance according to Vietnam laws
        - Exceptional talent will be matched with exceptional salary.
        - Competitive benefits package
        - Company trip
        - Free Grab to work
        
        3 REASONS WHY YOU WILL LOVE RAPBANK:
        - Incredible, humane challenges
        - A great chance to impact millions of lives
        - Passionate & professional colleagues.`,
        'cvRequire': true,
        'reportTo':'Operations Head',
        'NoticeForReferer':`We are Dreamplex, a Space for Success. As a coworking space, we aim to create an environment where our members can be as productive as they can be, collaborate with the community, and enjoy waking up every day and coming to work to take another step forward in their success story. 
                            To continue perfecting that environment, we start from the inside. We strive to provide our team with everything necessary for better work-life integration and fulfillment, from opportunities for learning and growth to a variety of exciting and exclusive benefits. With plans to expand, we are now hiring brilliant minds to be a part of our Dreambuilding family. `


    }
];

const JobDB = {
    categories: [
        {
            'id'   : 0,
            'value': 'web',
            'label': 'Web',
            'color': blue[500]
        },
        {
            'id'   : 1,
            'value': 'firebase',
            'label': 'Firebase',
            'color': amber[500]
        },
        {
            'id'   : 2,
            'value': 'cloud',
            'label': 'Cloud',
            'color': blueGrey[500]
        },
        {
            'id'   : 3,
            'value': 'android',
            'label': 'Android',
            'color': green[500]
        }
    ],
    locations   : [
        'Hanoi',
        'Ho Chi Minh',
        'Da nang'
        ],

    jobLevels:[
        "Cao cấp",
        "Giám đốc",
        "Trưởng phòng",
        "Chuyên gia",
        "Quản lý nhóm",
        "Quản lý",
        "Chuyên viên",
        "Nhân viên",
    ]
};

mock.onGet('/api/jobs/categories').reply(() => {
    return [200, JobDB.categories];
});
mock.onGet('/api/jobs/levels').reply(() => {
    return [200, JobDB.jobLevels];
});
mock.onGet('/api/jobs/locations').reply(() => {
    return [200, JobDB.locations];
});

mock.onGet('/api/jobs/all').reply((request) => {
    // const {pages,size} = request.params;
    // if(_.isNull(pages) || _.isNull(size) || ((pages-1)* size < 0) || (pages * size > jobDescriptions.length))
    //     return [404, null];
    // const response = jobDescriptions.slice((pages-1)* size, pages * size);
    return [200, jobDescriptions];
});

mock.onGet('/api/job').reply((request) => {
    const {jobId} = request.params;
    const response = _.find(jobDescriptions, {id: jobId});
    return [200, response];
});

mock.onPost('/api/job/save').reply((request)=>{
    return [200, null];
});

mock.onPost('/api/job/unsave').reply((request)=>{
    return [200, null];
});