import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutLibrary } from './pages/about-library/about-library';
import { RulesRegulations } from './pages/rules-regulations/rules-regulations';
import { LibraryTimings } from './pages/library-timings/library-timings';
import { Feedback } from './pages/feedback/feedback';
import { PhysicalResource } from './pages/physical-resource/physical-resource';
import { OnlineResource } from './pages/online-resource/online-resource';
import { DigitalLibrary } from './pages/digital-library/digital-library';
import { LibraryNotices } from './pages/library-notices/library-notices';
import { OnlineDatabases } from './pages/online-databases/online-databases';
import { NewArrivals } from './pages/new-arrivals/new-arrivals';
import { Opac } from './pages/opac/opac';
// import { IfheHolidaysList } from './pages/ifhe-holidays-list/ifhe-holidays-list';
import { SpecialAnnouncement } from './pages/special-announcement/special-announcement';
import { Noticedetails } from './pages/noticedetails/noticedetails';
import { Holidays } from './pages/holidays/holidays';
import { Forms } from './pages/forms/forms';
import { SubscribedPeriodicals } from './pages/subscribed-periodicals/subscribed-periodicals';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
 path:'about-library',
 component:AboutLibrary
},
{
 path:'rules-regulations',
 component:RulesRegulations
}
,
{
 path:'library-timings',
 component:LibraryTimings
},
{
 path:'feedback',
 component:Feedback
}   ,

{
    path:'physical-resource',
    component:PhysicalResource
},
{
    path:'online-resource',
    component:OnlineResource
},
{
    path:'digital-library',
    component:DigitalLibrary
},
{
    path:'online-databases',
    component:OnlineDatabases
},
{path:'new-arrivals',
    component:NewArrivals
},
{
    path:'library-timings',
    component:LibraryTimings    
},
{
    path:'library-notices',
    component:LibraryNotices
},
{
    path:'about-library',
    component:AboutLibrary
},
{
    path:'rules-regulations',
    component:RulesRegulations
},
{
    path:'feedback',
    component:Feedback
},
{
    path:'ifhe-holidays-list',
    component:Holidays
},
{
path :'library-forms',
component:Forms
},
{
path:'opac',
component:Opac
},

{
path:'subscribed-periodicals',component:SubscribedPeriodicals
},


{
    path: '**',
    redirectTo: ''
}

];