// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-open-access-resources',
//   imports: [],
//   templateUrl: './open-access-resources.html',
//   styleUrl: './open-access-resources.scss',
// })
// export class OpenAccessResources {}


import { Component } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-open-access-resources',
  imports: [BackButton],
  templateUrl: './open-access-resources.html',
  styleUrl: './open-access-resources.scss'
})
export class OpenAccessResources {

  resources = [

    {
      title: 'eBooks',
      icon: 'bi bi-book-fill',
      color: '#2563eb',

      items: [

        {
          name: 'DOAB: The Directory of Open Access Books',
          url: 'https://www.doabooks.org/'
        },

        {
          name: 'Project Gutenberg',
          url: 'https://www.gutenberg.org/'
        },

        {
          name: 'Springer Open Books',
          url: 'https://link.springer.com/brands/springer/books'
        },

        {
          name: 'Routledge - Open Access Book Content',
          url: 'https://www.routledge.com/go/open-access-book-content-from-SLUB'
        },

        {
          name: 'JSTOR Open Access Books',
          url: 'https://about.jstor.org/products/jstor-platform/whats-on-jstor/open-and-free/#search'
        },

        {
          name: 'Internet Archive Books',
          url: 'https://archive.org/'
        },

        {
          name: 'Open Library',
          url: 'https://openlibrary.org/search'
        },

        {
          name: 'Open Textbook Library',
          url: 'https://open.umn.edu/opentextbooks'
        },

        {
          name: 'Open Access eBooks',
          url: 'https://openaccessebooks.com/ebooks.html'
        },

        {
          name: 'MIT Press Open Access',
          url: 'https://direct.mit.edu/books/search-results?fl_SiteID=5&f_ContentType=Book&access_openaccess=true&sort=Date+-+Newest+First'
        },

        {
          name: 'Bloomsbury Collections - Open Access',
          url: 'https://www.bloomsburycollections.com/search-results?any=&acc=oa&sort=desc&field=date'
        },

        {
          name: 'IntechOpen Books',
          url: 'https://www.intechopen.com/books'
        },

        {
          name: 'Project MUSE Open Access Books',
          url: 'https://muse.jhu.edu/search?action=oa_browse&limit=subscription:n&limit=format:book'
        },

        {
          name: 'IOS Press eBooks',
          url: 'https://ebooks.iospress.nl/Publication/OpenAccess'
        },

        {
          name: 'Pluto Press Open Access',
          url: 'https://www.plutobooks.com/open-access/'
        },

        {
          name: 'Oxford University Press Open Access Books',
          url: 'https://academic.oup.com/books'
        },

        {
          name: 'Architecture Open Library',
          url: 'https://www.architectureopenlibrary.com/'
        }

      ]
    },

    {
      title: ' Journals',
      icon: 'bi bi-journal-richtext',
      color: '#16a34a',

      items: [

        {
          name: 'Directory of Open Access Journals (DOAJ)',
          url: 'https://doaj.org/'
        },

        {
          name: 'Cambridge Open Journals',
          url: 'https://www.cambridge.org/core/publications/open-access/listing'
        },

        {
          name: 'Springer Open Journals',
          url: 'https://link.springer.com/brands/springer/journals'
        },

        {
          name: 'Taylor & Francis Open Journals',
          url: 'https://www.tandfonline.com/openaccess/openjournals'
        },

        {
          name: 'Elsevier Open Journals',
          url: 'https://www.elsevier.com/en-in/products/journals'
        },

        {
          name: 'Wiley Open Access Journals',
          url: 'https://www.wileyopenaccess.com/'
        },

        {
          name: 'ScienceDirect Open Access',
          url: 'https://www.sciencedirect.com/browse/journals-and-books?contentType=JL&accessType=openAccess'
        }

      ]
    },

    {
      title: 'Statistical Resources',
      icon: 'bi bi-bar-chart-fill',
      color: '#f59e0b',

      items: [

        {
          name: 'Data Portal India',
          url: 'https://www.data.gov.in/'
        },

        {
          name: 'Census India',
          url: 'https://censusindia.gov.in/census.website/en'
        },

        {
          name: 'WHO Statistics',
          url: 'https://www.who.int/data/gho/publications/world-health-statistics'
        },

        {
          name: 'UNESCO Statistics',
          url: 'https://www.uis.unesco.org/en/data'
        },

        {
          name: 'Sustainable Development Goal Indicators',
          url: 'https://unstats.un.org/sdgs'
        }

      ]
    },

    {
      title: 'Plagiarism Check Tools',
      icon: 'bi bi-shield-check',
      color: '#dc2626',

      items: [

        {
          name: 'Paperpal',
          url: 'https://paperpal.com/tools/plagiarism-checker'
        },

        {
          name: 'Duplichecker',
          url: 'https://www.duplichecker.com/'
        },

        {
          name: 'Plagiarism Detector',
          url: 'https://plagiarismdetector.net/'
        },

        {
          name: 'Small SEO Tools',
          url: 'https://smallseotools.com/'
        }

      ]
    }

  ];

}