import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Table } from 'reactstrap';
import { TextFormat, Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './database-info.reducer';

export const DatabaseInfoDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const databaseInfoEntity = useAppSelector(state => state.databaseInfo.entity);
  const applicationList = databaseInfoEntity.applications;
  return (
    <div>
      <Row>
        <Col md="8">
          <h2 data-cy="databaseInfoDetailsHeading">
            <Translate contentKey="cmspApp.databaseInfo.detail.title">DatabaseInfo</Translate>
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="id">
                <Translate contentKey="global.field.id">ID</Translate>
              </span>
            </dt>
            <dd>{databaseInfoEntity.id}</dd>
            <dt>
              <span id="name">
                <Translate contentKey="cmspApp.databaseInfo.name">Name</Translate>
              </span>
            </dt>
            <dd>{databaseInfoEntity.name}</dd>
            <dt>
              <span id="serviceName">
                <Translate contentKey="cmspApp.databaseInfo.serviceName">Service Name</Translate>
              </span>
            </dt>
            <dd>{databaseInfoEntity.serviceName}</dd>
            <dt>
              <span id="userName">
                <Translate contentKey="cmspApp.databaseInfo.userName">User Name</Translate>
              </span>
            </dt>
            <dd>{databaseInfoEntity.userName}</dd>
            <dt>
              <span id="ipServer">
                <Translate contentKey="cmspApp.databaseInfo.ipServer">Ip Server</Translate>
              </span>
            </dt>
            <dd>{databaseInfoEntity.ipServer}</dd>
            <dt>
              <span id="port">
                <Translate contentKey="cmspApp.databaseInfo.port">Port</Translate>
              </span>
            </dt>
            <dd>{databaseInfoEntity.port}</dd>
            <dt>
              <span id="dataType">
                <Translate contentKey="cmspApp.databaseInfo.dataType">Data Type</Translate>
              </span>
            </dt>
            <dd>{databaseInfoEntity.dataType}</dd>

            <dt>
              <span id="createdDate">Created Date</span>
            </dt>
            <dd>
              {databaseInfoEntity.createdDate ? (
                <TextFormat value={databaseInfoEntity.createdDate} type="date" format={APP_DATE_FORMAT} />
              ) : null}
            </dd>
            <dt>
              <span id="createdBy">Created By</span>
            </dt>
            <dd>{databaseInfoEntity.createdBy}</dd>
            <dt>
              <span id="lastModifiedDate">Last Modified Date</span>
            </dt>
            <dd>
              {databaseInfoEntity.lastModifiedDate ? (
                <TextFormat value={databaseInfoEntity.lastModifiedDate} type="date" format={APP_DATE_FORMAT} />
              ) : null}
            </dd>
            <dt>
              <span id="lastModifiedBy">Last Modified By</span>
            </dt>
            <dd>{databaseInfoEntity.lastModifiedBy}</dd>
          </dl>
          <Button tag={Link} to="/database-info" replace color="info" data-cy="entityDetailsBackButton">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/database-info/${databaseInfoEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
      <Row className={'mt-5'}>
        <h4 id="application-heading" data-cy="ApplicationHeading">
          <label>Application Sử dụng</label>
        </h4>
        <div className="table-responsive">
          {applicationList && applicationList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand">
                    <label>STT</label>
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.name">Name</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.description">Description</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.linkSourceRepository">Link Source Repository</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.linkCmRepository">Link Cm Repository</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.serverlive">Serverlive</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.serveruat">Serveruat</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.enviroment">Enviroment</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.subComponent">Sub Component</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.epicJira">Epic Jira</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.dateStart">Date Start</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.appType">App Type</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand">
                    <Translate contentKey="cmspApp.application.dateGolive">Date Golive</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    <Translate contentKey="cmspApp.application.humans">Humans</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {applicationList.map((application, i) => (
                  <tr key={`entity-${i}`} data-cy="entityTable">
                    <td>{i + 1}</td>
                    <td>{application.name}</td>
                    <td>{application.description}</td>
                    <td className={'text-truncate'}>{application.linkSourceRepository}</td>
                    <td>{application.linkCmRepository}</td>
                    <td>{application.serverlive}</td>
                    <td>{application.serveruat}</td>
                    <td>{application.enviroment}</td>
                    <td>{application.subComponent}</td>
                    <td>{application.epicJira}</td>
                    <td>
                      {application.dateStart ? (
                        <TextFormat type="date" value={application.dateStart} format={APP_LOCAL_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      <Translate contentKey={`cmspApp.ApplicationType.${application.appType}`} />
                    </td>
                    <td>
                      {application.dateGolive ? (
                        <TextFormat type="date" value={application.dateGolive} format={APP_LOCAL_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>{application.humans ? <Link to={`/humans/${application.humans.id}`}>{application.humans.fullName}</Link> : ''}</td>
                    <td className="text-end">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`/application/${application.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="cmspApp.application.home.notFound">No Applications found</Translate>
            </div>
          )}
        </div>
      </Row>
    </div>
  );
};

export default DatabaseInfoDetail;
