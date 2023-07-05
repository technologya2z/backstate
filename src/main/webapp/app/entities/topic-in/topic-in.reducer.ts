import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { ITopicIn, defaultValue } from 'app/shared/model/topic-in.model';
import { IApiInfo } from 'app/shared/model/api-info.model';

const initialState: EntityState<ITopicIn> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/topic-ins';
const apiUrlWithId = 'api/topic-in-list';

// Actions

export const getEntities = createAsyncThunk('topicIn/fetch_entity_list', async ({ page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}cacheBuster=${new Date().getTime()}`;
  return axios.get<ITopicIn[]>(requestUrl);
});

export const getEntitiesTopicId = createAsyncThunk(
  'topicIn/fetch_entity_list',
  async (entity: any, thunkAPI) => {
    const result = await axios.post<ITopicIn[]>(apiUrlWithId, entity);
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const searchEntities = createAsyncThunk(
  'topicIn/fetch_entity_list_1',
  async ({ page, size, sort, searchCriterials }: IQueryParams) => {
    let requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}`;
    Object.keys(searchCriterials).map(function (key) {
      requestUrl += `${key}=${searchCriterials[key]}&`;
    });
    return axios.get<ITopicIn[]>(requestUrl);
  }
);

export const getEntity = createAsyncThunk(
  'topicIn/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<ITopicIn>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

export const createEntity = createAsyncThunk(
  'topicIn/create_entity',
  async (entity: ITopicIn, thunkAPI) => {
    const result = await axios.post<ITopicIn>(apiUrl, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const updateEntity = createAsyncThunk(
  'topicIn/update_entity',
  async (entity: ITopicIn, thunkAPI) => {
    const result = await axios.put<ITopicIn>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const partialUpdateEntity = createAsyncThunk(
  'topicIn/partial_update_entity',
  async (entity: ITopicIn, thunkAPI) => {
    const result = await axios.patch<ITopicIn>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const deleteEntity = createAsyncThunk(
  'topicIn/delete_entity',
  async (id: string | number, thunkAPI) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await axios.delete<ITopicIn>(requestUrl);
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

// slice

export const TopicInSlice = createEntitySlice({
  name: 'topicIn',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getEntity.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload.data;
      })
      .addCase(deleteEntity.fulfilled, state => {
        state.updating = false;
        state.updateSuccess = true;
        state.entity = {};
      })
      .addMatcher(isFulfilled(getEntities, searchEntities, getEntitiesTopicId), (state, action) => {
        const { data, headers } = action.payload;

        return {
          ...state,
          loading: false,
          entities: data,
          totalItems: parseInt(headers['x-total-count'], 10),
        };
      })
      .addMatcher(isFulfilled(createEntity, updateEntity, partialUpdateEntity), (state, action) => {
        state.updating = false;
        state.loading = false;
        state.updateSuccess = true;
        state.entity = action.payload.data;
      })
      .addMatcher(isPending(getEntities, getEntitiesTopicId, searchEntities, getEntity), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(isPending(createEntity, updateEntity, partialUpdateEntity, deleteEntity), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.updating = true;
      });
  },
});

export const { reset } = TopicInSlice.actions;

// Reducer
export default TopicInSlice.reducer;
