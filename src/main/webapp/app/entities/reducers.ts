import area from 'app/entities/area/area.reducer';
import organization from 'app/entities/organization/organization.reducer';
import department from 'app/entities/department/department.reducer';
import jobtitle from 'app/entities/jobtitle/jobtitle.reducer';
import humans from 'app/entities/humans/humans.reducer';
import application from 'app/entities/application/application.reducer';
import apiInfo from 'app/entities/api-info/api-info.reducer';
import apiIn from 'app/entities/api-in/api-in.reducer';
import apiOut from 'app/entities/api-out/api-out.reducer';
import databaseInfo from 'app/entities/database-info/database-info.reducer';
import operaUnit from 'app/entities/opera-unit/opera-unit.reducer';
import topic from 'app/entities/topic/topic.reducer';
import topicIn from 'app/entities/topic-in/topic-in.reducer';
import topicOut from 'app/entities/topic-out/topic-out.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  area,
  organization,
  department,
  jobtitle,
  humans,
  application,
  apiInfo,
  apiIn,
  apiOut,
  databaseInfo,
  operaUnit,
  topic,
  topicIn,
  topicOut,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
