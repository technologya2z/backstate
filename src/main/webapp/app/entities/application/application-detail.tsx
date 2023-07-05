import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Table } from 'reactstrap';
import { Translate, TextFormat, JhiItemCount, JhiPagination, getSortState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './application.reducer';
import { mapIdList, overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { ASC, DESC, ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { searchEntities } from 'app/entities/api-info/api-info.reducer';

import ModalAPI from 'app/entities/application/modal-api';
import ModalTopic from 'app/entities/application/modal-topic';

export const ApplicationDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();
  // API INFO
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );
  const [modalApiIsOpen, setmodalApiIsOpen] = useState(false);
  const [modalTopicIsOpen, setModalTopicIsOpen] = useState(false);

  const [idApiInfo, setIdApiInfo] = useState();
  const [idTopic, setIdTopic] = useState();

  const apiInfoList = useAppSelector(state => state.apiInfo.entities);
  const loading = useAppSelector(state => state.apiInfo.loading);
  const applicationEntity = useAppSelector(state => state.application.entity);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handleFilter = () => {
    const searchCriterials = [];
    searchCriterials['applicationId.equals'] = props.match.params.id;
    dispatch(
      searchEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
        searchCriterials,
      })
    );
  };

  const handleModalAPI = value => {
    setmodalApiIsOpen(true);
    setIdApiInfo(value);
  };

  const handleModalTopic = value => {
    setModalTopicIsOpen(true);
    setIdTopic(value);
  };

  useEffect(() => {
    handleFilter();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);
  // end
  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  return (
    <div>
      <Row>
        <Col md="8">
          <h2 data-cy="applicationDetailsHeading">
            <Translate contentKey="cmspApp.application.detail.title">Application</Translate>
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="id">
                <Translate contentKey="global.field.id">ID</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.id}</dd>
            <dt>
              <span id="name">
                <Translate contentKey="cmspApp.application.name">Name</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.name}</dd>
            <dt>
              <span id="code">
                <Translate contentKey="cmspApp.application.code">Code</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.code}</dd>
            <dt>
              <span id="description">
                <Translate contentKey="cmspApp.application.description">Description</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.description}</dd>
            <dt>
              <span id="linkSourceRepository">
                <Translate contentKey="cmspApp.application.linkSourceRepository">Link Source Repository</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.linkSourceRepository}</dd>
            <dt>
              <span id="linkCmRepository">
                <Translate contentKey="cmspApp.application.linkCmRepository">Link Cm Repository</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.linkCmRepository}</dd>
            <dt>
              <span id="serverlive">
                <Translate contentKey="cmspApp.application.serverlive">Serverlive</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.serverlive}</dd>
            <dt>
              <span id="serveruat">
                <Translate contentKey="cmspApp.application.serveruat">Serveruat</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.serveruat}</dd>

            <dt>
              <span id="linkLive">
                <Translate contentKey="cmspApp.application.linkLive">linkLive</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.linkLive}</dd>

            <dt>
              <span id="linkUat">
                <Translate contentKey="cmspApp.application.linkUat">linkUat</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.linkUat}</dd>

            <dt>
              <span id="enviroment">
                <Translate contentKey="cmspApp.application.enviroment">Enviroment</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.enviroment}</dd>
            <dt>
              <span id="subComponent">
                <Translate contentKey="cmspApp.application.subComponent">Sub Component</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.subComponent}</dd>
            <dt>
              <span id="epicJira">
                <Translate contentKey="cmspApp.application.epicJira">Epic Jira</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.epicJira}</dd>
            <dt>
              <span id="dateStart">
                <Translate contentKey="cmspApp.application.dateStart">Date Start</Translate>
              </span>
            </dt>
            <dd>
              {applicationEntity.dateStart ? (
                <TextFormat value={applicationEntity.dateStart} type="date" format={APP_LOCAL_DATE_FORMAT} />
              ) : null}
            </dd>
            <dt>
              <span id="appType">
                <Translate contentKey="cmspApp.application.appType">App Type</Translate>
              </span>
            </dt>
            <dd>{applicationEntity.appType}</dd>
            <dt>
              <span id="dateGolive">
                <Translate contentKey="cmspApp.application.dateGolive">Date Golive</Translate>
              </span>
            </dt>
            <dd>
              {applicationEntity.dateGolive ? (
                <TextFormat value={applicationEntity.dateGolive} type="date" format={APP_LOCAL_DATE_FORMAT} />
              ) : null}
            </dd>
            <dt>
              <Translate contentKey="cmspApp.application.databaseInfo">Database Info</Translate>
            </dt>
            <dd>
              {applicationEntity.databaseinfos
                ? applicationEntity.databaseinfos.map((val, i) => (
                    <span key={val.id}>
                      <a href={'database-info/' + val.id}>{val.name}</a>
                      {applicationEntity.databaseinfos && i === applicationEntity.databaseinfos.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>

            <dt>
              <Translate contentKey="cmspApp.application.topics">Topics</Translate>
            </dt>
            <dd>
              {applicationEntity.topics
                ? applicationEntity.topics.map((val, i) => (
                    <span key={val.id}>
                      <a href={'topic/' + val.id}>{val.name}</a>
                      {applicationEntity.topics && i === applicationEntity.topics.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>

            <dt>
              <Translate contentKey="cmspApp.application.operaunit">Operaunit</Translate>
            </dt>
            <dd>
              {applicationEntity.operaunits
                ? applicationEntity.operaunits.map((val, i) => (
                    <span key={val.id}>
                      <a href={'opera-unit/' + val.id}>{val.name}</a>
                      {applicationEntity.operaunits && i === applicationEntity.operaunits.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="cmspApp.application.humans">Humans</Translate>
            </dt>
            <dd>
              {applicationEntity.humans
                ? applicationEntity.humans.map((val, i) => (
                    <span key={val.id}>
                      <a href={val ? 'humans/' + val?.id : ''}>{val?.fullName}</a>
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <span id="createdDate">Created Date</span>
            </dt>
            <dd>
              {applicationEntity.createdDate ? (
                <TextFormat value={applicationEntity.createdDate} type="date" format={APP_DATE_FORMAT} />
              ) : null}
            </dd>
            <dt>
              <span id="createdBy">Created By</span>
            </dt>
            <dd>{applicationEntity.createdBy}</dd>
            <dt>
              <span id="lastModifiedDate">Last Modified Date</span>
            </dt>
            <dd>
              {applicationEntity.lastModifiedDate ? (
                <TextFormat value={applicationEntity.lastModifiedDate} type="date" format={APP_DATE_FORMAT} />
              ) : null}
            </dd>
            <dt>
              <span id="lastModifiedBy">Last Modified By</span>
            </dt>
            <dd>{applicationEntity.lastModifiedBy}</dd>
          </dl>
          <Button tag={Link} to="/application" replace color="info" data-cy="entityDetailsBackButton">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/application/${applicationEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>

      <Row>
        <div className="table-responsive mt-5">
          <h4>
            <Translate contentKey="cmspApp.apiInfo.home.title">Api Infos</Translate>
          </h4>
          {apiInfoList && apiInfoList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('name')}>
                    <Translate contentKey="cmspApp.apiInfo.name">Name</Translate>
                  </th>
                  <th className="hand" onClick={sort('path')}>
                    <Translate contentKey="cmspApp.apiInfo.path">Path</Translate>
                  </th>
                  <th className="hand" onClick={sort('linkDocument')}>
                    <Translate contentKey="cmspApp.apiInfo.linkDocument">linkDocument</Translate>
                  </th>
                  <th className="hand" onClick={sort('dateCreate')}>
                    <Translate contentKey="cmspApp.apiInfo.dateCreate">Date Create</Translate>
                  </th>
                  <th className="hand" onClick={sort('description')}>
                    <Translate contentKey="cmspApp.apiInfo.description">Description</Translate>
                  </th>
                  <th>
                    <Translate contentKey="cmspApp.apiInfo.application">Application</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {apiInfoList.map((apiInfo, i) => (
                  <tr key={`entity-${i}`} data-cy="entityTable">
                    <td>{apiInfo.name}</td>
                    <td>{apiInfo.path}</td>
                    <td>{apiInfo.linkDocument}</td>
                    <td>
                      {apiInfo.dateCreate ? <TextFormat type="date" value={apiInfo.dateCreate} format={APP_LOCAL_DATE_FORMAT} /> : null}
                    </td>
                    <td>{apiInfo.description}</td>
                    <td>
                      {apiInfo.application ? <Link to={`/application/${apiInfo.application.id}`}>{apiInfo.application.name}</Link> : ''}
                    </td>
                    <td className="text-end">
                      <div className="btn-group flex-btn-group-container">
                        <Button onClick={() => handleModalAPI(apiInfo.id)} color="info" size="sm" data-cy="entityDetailsButton">
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
            !loading && (
              <div className="alert alert-warning">
                <Translate contentKey="cmspApp.apiInfo.home.notFound">No Api Infos found</Translate>
              </div>
            )
          )}
        </div>
      </Row>

      <Row>
        <h4>
          <Translate contentKey="cmspApp.topic.home.title">TOPIC</Translate>
        </h4>
        <div className="table-responsive">
          {applicationEntity.topics && applicationEntity.topics.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('name')}>
                    <Translate contentKey="cmspApp.topic.name">Name</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('bootrapServer')}>
                    <Translate contentKey="cmspApp.topic.bootrapServer">Bootrap Server</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('locationTopic')}>
                    <Translate contentKey="cmspApp.topic.locationTopic">Location Topic</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('rootproducer')}>
                    <Translate contentKey="cmspApp.topic.rootproducer">Rootproducer</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('rootTable')}>
                    <Translate contentKey="cmspApp.topic.rootTable">Root Table</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {applicationEntity.topics.map((topic, i) => (
                  <tr key={`entity-${i}`} data-cy="entityTable">
                    <td>{topic.name}</td>
                    <td>{topic.bootrapServer}</td>
                    <td>{topic.locationTopic}</td>
                    <td>{topic.rootproducer}</td>
                    <td>{topic.rootTable}</td>
                    <td className="text-end">
                      <div className="btn-group flex-btn-group-container">
                        <Button onClick={() => handleModalTopic(topic.id)} color="info" size="sm" data-cy="entityDetailsButton">
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
            !loading && (
              <div className="alert alert-warning">
                <Translate contentKey="cmspApp.topic.home.notFound">No Topics found</Translate>
              </div>
            )
          )}
        </div>
      </Row>

      <ModalAPI props={props} isOpen={modalApiIsOpen} onClose={() => setmodalApiIsOpen(false)} idApiInfo={idApiInfo} />
      <ModalTopic props={props} isOpen={modalTopicIsOpen} onClose={() => setModalTopicIsOpen(false)} idTopic={idTopic} />
    </div>
  );
};

export default ApplicationDetail;
