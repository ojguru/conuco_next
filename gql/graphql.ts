/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ProyectoContenidoDynamicZoneInput: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClienteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClienteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ClienteFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClienteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClienteFiltersInput>>>;
  proyectos?: InputMaybe<ProyectoFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ClienteInput = {
  locale?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  proyectos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsContactoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsContactoFiltersInput>>>;
  copy?: InputMaybe<StringFilterInput>;
  formulario?: InputMaybe<ComponentComponentsFormularioFiltersInput>;
  not?: InputMaybe<ComponentComponentsContactoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsContactoFiltersInput>>>;
  titular?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsContactoInput = {
  copy?: InputMaybe<Scalars['String']['input']>;
  formulario?: InputMaybe<ComponentComponentsFormularioInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsFormularioFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsFormularioFiltersInput>>>;
  formId?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsFormularioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsFormularioFiltersInput>>>;
};

export type ComponentComponentsFormularioInput = {
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmpleadoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmpleadoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EmpleadoFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmpleadoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmpleadoFiltersInput>>>;
  order?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  puesto?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmpleadoInput = {
  foto?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  puesto?: InputMaybe<Scalars['String']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<I18NLocaleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PilarFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PilarFiltersInput>>>;
  contacto?: InputMaybe<ComponentComponentsContactoFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descripcion?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PilarFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PilarFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PilarFiltersInput>>>;
  proyectos?: InputMaybe<ProyectoFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PilarInput = {
  contacto?: InputMaybe<ComponentComponentsContactoInput>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  icono?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  medio?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  proyectos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type ProyectoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProyectoFiltersInput>>>;
  cliente?: InputMaybe<ClienteFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProyectoFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProyectoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProyectoFiltersInput>>>;
  pilar?: InputMaybe<PilarFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProyectoInput = {
  cliente?: InputMaybe<Scalars['ID']['input']>;
  contenido?: InputMaybe<Array<Scalars['ProyectoContenidoDynamicZoneInput']['input']>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  medio?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  pilar?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UploadFileFiltersInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsUserFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ProyectoContenidoDynamicZoneInput: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cliente = {
  __typename?: 'Cliente';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Cliente>>;
  localizations_connection?: Maybe<ClienteRelationResponseCollection>;
  logo: UploadFile;
  nombre: Scalars['String']['output'];
  proyectos: Array<Maybe<Proyecto>>;
  proyectos_connection?: Maybe<ProyectoRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ClienteLocalizationsArgs = {
  filters?: InputMaybe<ClienteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClienteLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ClienteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClienteProyectosArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClienteProyectos_ConnectionArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClienteEntityResponseCollection = {
  __typename?: 'ClienteEntityResponseCollection';
  nodes: Array<Cliente>;
  pageInfo: Pagination;
};

export type ClienteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClienteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ClienteFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClienteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClienteFiltersInput>>>;
  proyectos?: InputMaybe<ProyectoFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ClienteInput = {
  locale?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  proyectos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ClienteRelationResponseCollection = {
  __typename?: 'ClienteRelationResponseCollection';
  nodes: Array<Cliente>;
};

export type ComponentComponentsContacto = {
  __typename?: 'ComponentComponentsContacto';
  copy: Scalars['String']['output'];
  formulario: ComponentComponentsFormulario;
  id: Scalars['ID']['output'];
  titular: Scalars['String']['output'];
};

export type ComponentComponentsContactoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsContactoFiltersInput>>>;
  copy?: InputMaybe<StringFilterInput>;
  formulario?: InputMaybe<ComponentComponentsFormularioFiltersInput>;
  not?: InputMaybe<ComponentComponentsContactoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsContactoFiltersInput>>>;
  titular?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsContactoInput = {
  copy?: InputMaybe<Scalars['String']['input']>;
  formulario?: InputMaybe<ComponentComponentsFormularioInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsFormulario = {
  __typename?: 'ComponentComponentsFormulario';
  formId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentComponentsFormularioFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsFormularioFiltersInput>>>;
  formId?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsFormularioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsFormularioFiltersInput>>>;
};

export type ComponentComponentsFormularioInput = {
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentProyectoContenido = {
  __typename?: 'ComponentProyectoContenido';
  id: Scalars['ID']['output'];
  texto: Scalars['JSON']['output'];
};

export type ComponentProyectoImagenAnchoCompleto = {
  __typename?: 'ComponentProyectoImagenAnchoCompleto';
  id: Scalars['ID']['output'];
  medio: UploadFile;
};

export type ComponentProyectoImagenDosColumnas = {
  __typename?: 'ComponentProyectoImagenDosColumnas';
  id: Scalars['ID']['output'];
  medio1: UploadFile;
  medio2: UploadFile;
};

export type ComponentProyectoVideo = {
  __typename?: 'ComponentProyectoVideo';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Empleado = {
  __typename?: 'Empleado';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  foto: UploadFile;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Empleado>>;
  localizations_connection?: Maybe<EmpleadoRelationResponseCollection>;
  nombre: Scalars['String']['output'];
  order?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  puesto: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EmpleadoLocalizationsArgs = {
  filters?: InputMaybe<EmpleadoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EmpleadoLocalizations_ConnectionArgs = {
  filters?: InputMaybe<EmpleadoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EmpleadoEntityResponseCollection = {
  __typename?: 'EmpleadoEntityResponseCollection';
  nodes: Array<Empleado>;
  pageInfo: Pagination;
};

export type EmpleadoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmpleadoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EmpleadoFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmpleadoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmpleadoFiltersInput>>>;
  order?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  puesto?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmpleadoInput = {
  foto?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  puesto?: InputMaybe<Scalars['String']['input']>;
};

export type EmpleadoRelationResponseCollection = {
  __typename?: 'EmpleadoRelationResponseCollection';
  nodes: Array<Empleado>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Cliente | ComponentComponentsContacto | ComponentComponentsFormulario | ComponentProyectoContenido | ComponentProyectoImagenAnchoCompleto | ComponentProyectoImagenDosColumnas | ComponentProyectoVideo | Empleado | I18NLocale | Pilar | Proyecto | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<I18NLocale>>;
  localizations_connection?: Maybe<I18NLocaleRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type I18NLocaleLocalizationsArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type I18NLocaleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<I18NLocaleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  nodes: Array<I18NLocale>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCliente?: Maybe<Cliente>;
  createEmpleado?: Maybe<Empleado>;
  createPilar?: Maybe<Pilar>;
  createProyecto?: Maybe<Proyecto>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCliente?: Maybe<DeleteMutationResponse>;
  deleteEmpleado?: Maybe<DeleteMutationResponse>;
  deletePilar?: Maybe<DeleteMutationResponse>;
  deleteProyecto?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCliente?: Maybe<Cliente>;
  updateEmpleado?: Maybe<Empleado>;
  updatePilar?: Maybe<Pilar>;
  updateProyecto?: Maybe<Proyecto>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateClienteArgs = {
  data: ClienteInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateEmpleadoArgs = {
  data: EmpleadoInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePilarArgs = {
  data: PilarInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProyectoArgs = {
  data: ProyectoInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteClienteArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteEmpleadoArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePilarArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProyectoArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateClienteArgs = {
  data: ClienteInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateEmpleadoArgs = {
  data: EmpleadoInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePilarArgs = {
  data: PilarInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProyectoArgs = {
  data: ProyectoInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Pilar = {
  __typename?: 'Pilar';
  contacto: ComponentComponentsContacto;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descripcion: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  icono: UploadFile;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Pilar>>;
  localizations_connection?: Maybe<PilarRelationResponseCollection>;
  medio: UploadFile;
  nombre: Scalars['String']['output'];
  proyectos: Array<Maybe<Proyecto>>;
  proyectos_connection?: Maybe<ProyectoRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  titular: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PilarLocalizationsArgs = {
  filters?: InputMaybe<PilarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PilarLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PilarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PilarProyectosArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PilarProyectos_ConnectionArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PilarEntityResponseCollection = {
  __typename?: 'PilarEntityResponseCollection';
  nodes: Array<Pilar>;
  pageInfo: Pagination;
};

export type PilarFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PilarFiltersInput>>>;
  contacto?: InputMaybe<ComponentComponentsContactoFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descripcion?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PilarFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PilarFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PilarFiltersInput>>>;
  proyectos?: InputMaybe<ProyectoFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titular?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PilarInput = {
  contacto?: InputMaybe<ComponentComponentsContactoInput>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  icono?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  medio?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  proyectos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titular?: InputMaybe<Scalars['String']['input']>;
};

export type PilarRelationResponseCollection = {
  __typename?: 'PilarRelationResponseCollection';
  nodes: Array<Pilar>;
};

export type Proyecto = {
  __typename?: 'Proyecto';
  cliente?: Maybe<Cliente>;
  contenido?: Maybe<Array<Maybe<ProyectoContenidoDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Proyecto>>;
  localizations_connection?: Maybe<ProyectoRelationResponseCollection>;
  medio: UploadFile;
  nombre: Scalars['String']['output'];
  pilar?: Maybe<Pilar>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProyectoLocalizationsArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProyectoLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProyectoContenidoDynamicZone = ComponentProyectoContenido | ComponentProyectoImagenAnchoCompleto | ComponentProyectoImagenDosColumnas | ComponentProyectoVideo | Error;

export type ProyectoEntityResponseCollection = {
  __typename?: 'ProyectoEntityResponseCollection';
  nodes: Array<Proyecto>;
  pageInfo: Pagination;
};

export type ProyectoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProyectoFiltersInput>>>;
  cliente?: InputMaybe<ClienteFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProyectoFiltersInput>;
  nombre?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProyectoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProyectoFiltersInput>>>;
  pilar?: InputMaybe<PilarFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProyectoInput = {
  cliente?: InputMaybe<Scalars['ID']['input']>;
  contenido?: InputMaybe<Array<Scalars['ProyectoContenidoDynamicZoneInput']['input']>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  medio?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  pilar?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProyectoRelationResponseCollection = {
  __typename?: 'ProyectoRelationResponseCollection';
  nodes: Array<Proyecto>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  cliente?: Maybe<Cliente>;
  clientes: Array<Maybe<Cliente>>;
  clientes_connection?: Maybe<ClienteEntityResponseCollection>;
  empleado?: Maybe<Empleado>;
  empleados: Array<Maybe<Empleado>>;
  empleados_connection?: Maybe<EmpleadoEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  pilar?: Maybe<Pilar>;
  pilares: Array<Maybe<Pilar>>;
  pilares_connection?: Maybe<PilarEntityResponseCollection>;
  proyecto?: Maybe<Proyecto>;
  proyectos: Array<Maybe<Proyecto>>;
  proyectos_connection?: Maybe<ProyectoEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryClienteArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryClientesArgs = {
  filters?: InputMaybe<ClienteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryClientes_ConnectionArgs = {
  filters?: InputMaybe<ClienteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmpleadoArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmpleadosArgs = {
  filters?: InputMaybe<EmpleadoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmpleados_ConnectionArgs = {
  filters?: InputMaybe<EmpleadoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPilarArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPilaresArgs = {
  filters?: InputMaybe<PilarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPilares_ConnectionArgs = {
  filters?: InputMaybe<PilarFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProyectoArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProyectosArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProyectos_ConnectionArgs = {
  filters?: InputMaybe<ProyectoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<ReviewWorkflowsWorkflow>>;
  localizations_connection?: Maybe<ReviewWorkflowsWorkflowRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowLocalizationsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  localizations_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};


export type ReviewWorkflowsWorkflowStageLocalizationsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<UploadFile>>;
  localizations_connection?: Maybe<UploadFileRelationResponseCollection>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


export type UploadFileLocalizationsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFileLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UploadFileFiltersInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<UsersPermissionsPermission>>;
  localizations_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UsersPermissionsPermissionLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsPermissionLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<UsersPermissionsRole>>;
  localizations_connection?: Maybe<UsersPermissionsRoleRelationResponseCollection>;
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRoleLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  nodes: Array<UsersPermissionsRole>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<UsersPermissionsUser>>;
  localizations_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsUserFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  GenericMorph: ( Omit<Cliente, 'localizations' | 'localizations_connection' | 'logo' | 'proyectos' | 'proyectos_connection'> & { localizations: Array<Maybe<_RefType['Cliente']>>, localizations_connection?: Maybe<_RefType['ClienteRelationResponseCollection']>, logo: _RefType['UploadFile'], proyectos: Array<Maybe<_RefType['Proyecto']>>, proyectos_connection?: Maybe<_RefType['ProyectoRelationResponseCollection']> } ) | ( ComponentComponentsContacto ) | ( ComponentComponentsFormulario ) | ( ComponentProyectoContenido ) | ( Omit<ComponentProyectoImagenAnchoCompleto, 'medio'> & { medio: _RefType['UploadFile'] } ) | ( Omit<ComponentProyectoImagenDosColumnas, 'medio1' | 'medio2'> & { medio1: _RefType['UploadFile'], medio2: _RefType['UploadFile'] } ) | ( ComponentProyectoVideo ) | ( Omit<Empleado, 'foto' | 'localizations' | 'localizations_connection'> & { foto: _RefType['UploadFile'], localizations: Array<Maybe<_RefType['Empleado']>>, localizations_connection?: Maybe<_RefType['EmpleadoRelationResponseCollection']> } ) | ( I18NLocale ) | ( Omit<Pilar, 'icono' | 'localizations' | 'localizations_connection' | 'medio' | 'proyectos' | 'proyectos_connection'> & { icono: _RefType['UploadFile'], localizations: Array<Maybe<_RefType['Pilar']>>, localizations_connection?: Maybe<_RefType['PilarRelationResponseCollection']>, medio: _RefType['UploadFile'], proyectos: Array<Maybe<_RefType['Proyecto']>>, proyectos_connection?: Maybe<_RefType['ProyectoRelationResponseCollection']> } ) | ( Omit<Proyecto, 'cliente' | 'contenido' | 'localizations' | 'localizations_connection' | 'medio' | 'pilar'> & { cliente?: Maybe<_RefType['Cliente']>, contenido?: Maybe<Array<Maybe<_RefType['ProyectoContenidoDynamicZone']>>>, localizations: Array<Maybe<_RefType['Proyecto']>>, localizations_connection?: Maybe<_RefType['ProyectoRelationResponseCollection']>, medio: _RefType['UploadFile'], pilar?: Maybe<_RefType['Pilar']> } ) | ( ReviewWorkflowsWorkflow ) | ( ReviewWorkflowsWorkflowStage ) | ( Omit<UploadFile, 'localizations' | 'localizations_connection' | 'related'> & { localizations: Array<Maybe<_RefType['UploadFile']>>, localizations_connection?: Maybe<_RefType['UploadFileRelationResponseCollection']>, related?: Maybe<Array<Maybe<_RefType['GenericMorph']>>> } ) | ( UsersPermissionsPermission ) | ( UsersPermissionsRole ) | ( UsersPermissionsUser );
  ProyectoContenidoDynamicZone: ( ComponentProyectoContenido ) | ( Omit<ComponentProyectoImagenAnchoCompleto, 'medio'> & { medio: _RefType['UploadFile'] } ) | ( Omit<ComponentProyectoImagenDosColumnas, 'medio1' | 'medio2'> & { medio1: _RefType['UploadFile'], medio2: _RefType['UploadFile'] } ) | ( ComponentProyectoVideo ) | ( Error );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BooleanFilterInput: BooleanFilterInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cliente: ResolverTypeWrapper<Omit<Cliente, 'localizations' | 'localizations_connection' | 'logo' | 'proyectos' | 'proyectos_connection'> & { localizations: Array<Maybe<ResolversTypes['Cliente']>>, localizations_connection?: Maybe<ResolversTypes['ClienteRelationResponseCollection']>, logo: ResolversTypes['UploadFile'], proyectos: Array<Maybe<ResolversTypes['Proyecto']>>, proyectos_connection?: Maybe<ResolversTypes['ProyectoRelationResponseCollection']> }>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ClienteEntityResponseCollection: ResolverTypeWrapper<Omit<ClienteEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Cliente']> }>;
  ClienteFiltersInput: ClienteFiltersInput;
  ClienteInput: ClienteInput;
  ClienteRelationResponseCollection: ResolverTypeWrapper<Omit<ClienteRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Cliente']> }>;
  ComponentComponentsContacto: ResolverTypeWrapper<ComponentComponentsContacto>;
  ComponentComponentsContactoFiltersInput: ComponentComponentsContactoFiltersInput;
  ComponentComponentsContactoInput: ComponentComponentsContactoInput;
  ComponentComponentsFormulario: ResolverTypeWrapper<ComponentComponentsFormulario>;
  ComponentComponentsFormularioFiltersInput: ComponentComponentsFormularioFiltersInput;
  ComponentComponentsFormularioInput: ComponentComponentsFormularioInput;
  ComponentProyectoContenido: ResolverTypeWrapper<ComponentProyectoContenido>;
  ComponentProyectoImagenAnchoCompleto: ResolverTypeWrapper<Omit<ComponentProyectoImagenAnchoCompleto, 'medio'> & { medio: ResolversTypes['UploadFile'] }>;
  ComponentProyectoImagenDosColumnas: ResolverTypeWrapper<Omit<ComponentProyectoImagenDosColumnas, 'medio1' | 'medio2'> & { medio1: ResolversTypes['UploadFile'], medio2: ResolversTypes['UploadFile'] }>;
  ComponentProyectoVideo: ResolverTypeWrapper<ComponentProyectoVideo>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFilterInput: DateTimeFilterInput;
  DeleteMutationResponse: ResolverTypeWrapper<DeleteMutationResponse>;
  Empleado: ResolverTypeWrapper<Omit<Empleado, 'foto' | 'localizations' | 'localizations_connection'> & { foto: ResolversTypes['UploadFile'], localizations: Array<Maybe<ResolversTypes['Empleado']>>, localizations_connection?: Maybe<ResolversTypes['EmpleadoRelationResponseCollection']> }>;
  EmpleadoEntityResponseCollection: ResolverTypeWrapper<Omit<EmpleadoEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Empleado']> }>;
  EmpleadoFiltersInput: EmpleadoFiltersInput;
  EmpleadoInput: EmpleadoInput;
  EmpleadoRelationResponseCollection: ResolverTypeWrapper<Omit<EmpleadoRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Empleado']> }>;
  Error: ResolverTypeWrapper<Error>;
  FileInfoInput: FileInfoInput;
  FloatFilterInput: FloatFilterInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GenericMorph: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['GenericMorph']>;
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  I18NLocaleRelationResponseCollection: ResolverTypeWrapper<I18NLocaleRelationResponseCollection>;
  IDFilterInput: IdFilterInput;
  IntFilterInput: IntFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONFilterInput: JsonFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationArg: PaginationArg;
  Pilar: ResolverTypeWrapper<Omit<Pilar, 'icono' | 'localizations' | 'localizations_connection' | 'medio' | 'proyectos' | 'proyectos_connection'> & { icono: ResolversTypes['UploadFile'], localizations: Array<Maybe<ResolversTypes['Pilar']>>, localizations_connection?: Maybe<ResolversTypes['PilarRelationResponseCollection']>, medio: ResolversTypes['UploadFile'], proyectos: Array<Maybe<ResolversTypes['Proyecto']>>, proyectos_connection?: Maybe<ResolversTypes['ProyectoRelationResponseCollection']> }>;
  PilarEntityResponseCollection: ResolverTypeWrapper<Omit<PilarEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Pilar']> }>;
  PilarFiltersInput: PilarFiltersInput;
  PilarInput: PilarInput;
  PilarRelationResponseCollection: ResolverTypeWrapper<Omit<PilarRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Pilar']> }>;
  Proyecto: ResolverTypeWrapper<Omit<Proyecto, 'cliente' | 'contenido' | 'localizations' | 'localizations_connection' | 'medio' | 'pilar'> & { cliente?: Maybe<ResolversTypes['Cliente']>, contenido?: Maybe<Array<Maybe<ResolversTypes['ProyectoContenidoDynamicZone']>>>, localizations: Array<Maybe<ResolversTypes['Proyecto']>>, localizations_connection?: Maybe<ResolversTypes['ProyectoRelationResponseCollection']>, medio: ResolversTypes['UploadFile'], pilar?: Maybe<ResolversTypes['Pilar']> }>;
  ProyectoContenidoDynamicZone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ProyectoContenidoDynamicZone']>;
  ProyectoContenidoDynamicZoneInput: ResolverTypeWrapper<Scalars['ProyectoContenidoDynamicZoneInput']['output']>;
  ProyectoEntityResponseCollection: ResolverTypeWrapper<Omit<ProyectoEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Proyecto']> }>;
  ProyectoFiltersInput: ProyectoFiltersInput;
  ProyectoInput: ProyectoInput;
  ProyectoRelationResponseCollection: ResolverTypeWrapper<Omit<ProyectoRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Proyecto']> }>;
  PublicationStatus: PublicationStatus;
  Query: ResolverTypeWrapper<{}>;
  ReviewWorkflowsWorkflow: ResolverTypeWrapper<ReviewWorkflowsWorkflow>;
  ReviewWorkflowsWorkflowEntityResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowEntityResponseCollection>;
  ReviewWorkflowsWorkflowFiltersInput: ReviewWorkflowsWorkflowFiltersInput;
  ReviewWorkflowsWorkflowInput: ReviewWorkflowsWorkflowInput;
  ReviewWorkflowsWorkflowRelationResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowRelationResponseCollection>;
  ReviewWorkflowsWorkflowStage: ResolverTypeWrapper<ReviewWorkflowsWorkflowStage>;
  ReviewWorkflowsWorkflowStageEntityResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  ReviewWorkflowsWorkflowStageFiltersInput: ReviewWorkflowsWorkflowStageFiltersInput;
  ReviewWorkflowsWorkflowStageInput: ReviewWorkflowsWorkflowStageInput;
  ReviewWorkflowsWorkflowStageRelationResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  StringFilterInput: StringFilterInput;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'localizations' | 'localizations_connection' | 'related'> & { localizations: Array<Maybe<ResolversTypes['UploadFile']>>, localizations_connection?: Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }>;
  UploadFileEntityResponseCollection: ResolverTypeWrapper<Omit<UploadFileEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['UploadFile']> }>;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileRelationResponseCollection: ResolverTypeWrapper<Omit<UploadFileRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['UploadFile']> }>;
  UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
  UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsRoleRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleRelationResponseCollection>;
  UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
  UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BooleanFilterInput: BooleanFilterInput;
  Boolean: Scalars['Boolean']['output'];
  Cliente: Omit<Cliente, 'localizations' | 'localizations_connection' | 'logo' | 'proyectos' | 'proyectos_connection'> & { localizations: Array<Maybe<ResolversParentTypes['Cliente']>>, localizations_connection?: Maybe<ResolversParentTypes['ClienteRelationResponseCollection']>, logo: ResolversParentTypes['UploadFile'], proyectos: Array<Maybe<ResolversParentTypes['Proyecto']>>, proyectos_connection?: Maybe<ResolversParentTypes['ProyectoRelationResponseCollection']> };
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  ClienteEntityResponseCollection: Omit<ClienteEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Cliente']> };
  ClienteFiltersInput: ClienteFiltersInput;
  ClienteInput: ClienteInput;
  ClienteRelationResponseCollection: Omit<ClienteRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Cliente']> };
  ComponentComponentsContacto: ComponentComponentsContacto;
  ComponentComponentsContactoFiltersInput: ComponentComponentsContactoFiltersInput;
  ComponentComponentsContactoInput: ComponentComponentsContactoInput;
  ComponentComponentsFormulario: ComponentComponentsFormulario;
  ComponentComponentsFormularioFiltersInput: ComponentComponentsFormularioFiltersInput;
  ComponentComponentsFormularioInput: ComponentComponentsFormularioInput;
  ComponentProyectoContenido: ComponentProyectoContenido;
  ComponentProyectoImagenAnchoCompleto: Omit<ComponentProyectoImagenAnchoCompleto, 'medio'> & { medio: ResolversParentTypes['UploadFile'] };
  ComponentProyectoImagenDosColumnas: Omit<ComponentProyectoImagenDosColumnas, 'medio1' | 'medio2'> & { medio1: ResolversParentTypes['UploadFile'], medio2: ResolversParentTypes['UploadFile'] };
  ComponentProyectoVideo: ComponentProyectoVideo;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFilterInput: DateTimeFilterInput;
  DeleteMutationResponse: DeleteMutationResponse;
  Empleado: Omit<Empleado, 'foto' | 'localizations' | 'localizations_connection'> & { foto: ResolversParentTypes['UploadFile'], localizations: Array<Maybe<ResolversParentTypes['Empleado']>>, localizations_connection?: Maybe<ResolversParentTypes['EmpleadoRelationResponseCollection']> };
  EmpleadoEntityResponseCollection: Omit<EmpleadoEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Empleado']> };
  EmpleadoFiltersInput: EmpleadoFiltersInput;
  EmpleadoInput: EmpleadoInput;
  EmpleadoRelationResponseCollection: Omit<EmpleadoRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Empleado']> };
  Error: Error;
  FileInfoInput: FileInfoInput;
  FloatFilterInput: FloatFilterInput;
  Float: Scalars['Float']['output'];
  GenericMorph: ResolversUnionTypes<ResolversParentTypes>['GenericMorph'];
  I18NLocale: I18NLocale;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  I18NLocaleRelationResponseCollection: I18NLocaleRelationResponseCollection;
  IDFilterInput: IdFilterInput;
  IntFilterInput: IntFilterInput;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  JSONFilterInput: JsonFilterInput;
  Mutation: {};
  Pagination: Pagination;
  PaginationArg: PaginationArg;
  Pilar: Omit<Pilar, 'icono' | 'localizations' | 'localizations_connection' | 'medio' | 'proyectos' | 'proyectos_connection'> & { icono: ResolversParentTypes['UploadFile'], localizations: Array<Maybe<ResolversParentTypes['Pilar']>>, localizations_connection?: Maybe<ResolversParentTypes['PilarRelationResponseCollection']>, medio: ResolversParentTypes['UploadFile'], proyectos: Array<Maybe<ResolversParentTypes['Proyecto']>>, proyectos_connection?: Maybe<ResolversParentTypes['ProyectoRelationResponseCollection']> };
  PilarEntityResponseCollection: Omit<PilarEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Pilar']> };
  PilarFiltersInput: PilarFiltersInput;
  PilarInput: PilarInput;
  PilarRelationResponseCollection: Omit<PilarRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Pilar']> };
  Proyecto: Omit<Proyecto, 'cliente' | 'contenido' | 'localizations' | 'localizations_connection' | 'medio' | 'pilar'> & { cliente?: Maybe<ResolversParentTypes['Cliente']>, contenido?: Maybe<Array<Maybe<ResolversParentTypes['ProyectoContenidoDynamicZone']>>>, localizations: Array<Maybe<ResolversParentTypes['Proyecto']>>, localizations_connection?: Maybe<ResolversParentTypes['ProyectoRelationResponseCollection']>, medio: ResolversParentTypes['UploadFile'], pilar?: Maybe<ResolversParentTypes['Pilar']> };
  ProyectoContenidoDynamicZone: ResolversUnionTypes<ResolversParentTypes>['ProyectoContenidoDynamicZone'];
  ProyectoContenidoDynamicZoneInput: Scalars['ProyectoContenidoDynamicZoneInput']['output'];
  ProyectoEntityResponseCollection: Omit<ProyectoEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Proyecto']> };
  ProyectoFiltersInput: ProyectoFiltersInput;
  ProyectoInput: ProyectoInput;
  ProyectoRelationResponseCollection: Omit<ProyectoRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['Proyecto']> };
  Query: {};
  ReviewWorkflowsWorkflow: ReviewWorkflowsWorkflow;
  ReviewWorkflowsWorkflowEntityResponseCollection: ReviewWorkflowsWorkflowEntityResponseCollection;
  ReviewWorkflowsWorkflowFiltersInput: ReviewWorkflowsWorkflowFiltersInput;
  ReviewWorkflowsWorkflowInput: ReviewWorkflowsWorkflowInput;
  ReviewWorkflowsWorkflowRelationResponseCollection: ReviewWorkflowsWorkflowRelationResponseCollection;
  ReviewWorkflowsWorkflowStage: ReviewWorkflowsWorkflowStage;
  ReviewWorkflowsWorkflowStageEntityResponseCollection: ReviewWorkflowsWorkflowStageEntityResponseCollection;
  ReviewWorkflowsWorkflowStageFiltersInput: ReviewWorkflowsWorkflowStageFiltersInput;
  ReviewWorkflowsWorkflowStageInput: ReviewWorkflowsWorkflowStageInput;
  ReviewWorkflowsWorkflowStageRelationResponseCollection: ReviewWorkflowsWorkflowStageRelationResponseCollection;
  StringFilterInput: StringFilterInput;
  UploadFile: Omit<UploadFile, 'localizations' | 'localizations_connection' | 'related'> & { localizations: Array<Maybe<ResolversParentTypes['UploadFile']>>, localizations_connection?: Maybe<ResolversParentTypes['UploadFileRelationResponseCollection']>, related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
  UploadFileEntityResponseCollection: Omit<UploadFileEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['UploadFile']> };
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileRelationResponseCollection: Omit<UploadFileRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversParentTypes['UploadFile']> };
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsRoleRelationResponseCollection: UsersPermissionsRoleRelationResponseCollection;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
};

export type ClienteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cliente'] = ResolversParentTypes['Cliente']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['Cliente']>>, ParentType, ContextType, RequireFields<ClienteLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['ClienteRelationResponseCollection']>, ParentType, ContextType, RequireFields<ClienteLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  logo?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  nombre?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proyectos?: Resolver<Array<Maybe<ResolversTypes['Proyecto']>>, ParentType, ContextType, RequireFields<ClienteProyectosArgs, 'pagination' | 'sort'>>;
  proyectos_connection?: Resolver<Maybe<ResolversTypes['ProyectoRelationResponseCollection']>, ParentType, ContextType, RequireFields<ClienteProyectos_ConnectionArgs, 'pagination' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClienteEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClienteEntityResponseCollection'] = ResolversParentTypes['ClienteEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Cliente']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClienteRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClienteRelationResponseCollection'] = ResolversParentTypes['ClienteRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Cliente']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsContactoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentComponentsContacto'] = ResolversParentTypes['ComponentComponentsContacto']> = {
  copy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formulario?: Resolver<ResolversTypes['ComponentComponentsFormulario'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  titular?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsFormularioResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentComponentsFormulario'] = ResolversParentTypes['ComponentComponentsFormulario']> = {
  formId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProyectoContenidoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProyectoContenido'] = ResolversParentTypes['ComponentProyectoContenido']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  texto?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProyectoImagenAnchoCompletoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProyectoImagenAnchoCompleto'] = ResolversParentTypes['ComponentProyectoImagenAnchoCompleto']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  medio?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProyectoImagenDosColumnasResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProyectoImagenDosColumnas'] = ResolversParentTypes['ComponentProyectoImagenDosColumnas']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  medio1?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  medio2?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProyectoVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProyectoVideo'] = ResolversParentTypes['ComponentProyectoVideo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteMutationResponse'] = ResolversParentTypes['DeleteMutationResponse']> = {
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmpleadoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Empleado'] = ResolversParentTypes['Empleado']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  foto?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['Empleado']>>, ParentType, ContextType, RequireFields<EmpleadoLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['EmpleadoRelationResponseCollection']>, ParentType, ContextType, RequireFields<EmpleadoLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  nombre?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  puesto?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmpleadoEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmpleadoEntityResponseCollection'] = ResolversParentTypes['EmpleadoEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Empleado']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmpleadoRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmpleadoRelationResponseCollection'] = ResolversParentTypes['EmpleadoRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Empleado']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph']> = {
  __resolveType: TypeResolveFn<'Cliente' | 'ComponentComponentsContacto' | 'ComponentComponentsFormulario' | 'ComponentProyectoContenido' | 'ComponentProyectoImagenAnchoCompleto' | 'ComponentProyectoImagenDosColumnas' | 'ComponentProyectoVideo' | 'Empleado' | 'I18NLocale' | 'Pilar' | 'Proyecto' | 'ReviewWorkflowsWorkflow' | 'ReviewWorkflowsWorkflowStage' | 'UploadFile' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsUser', ParentType, ContextType>;
};

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['I18NLocale']>>, ParentType, ContextType, RequireFields<I18NLocaleLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['I18NLocaleRelationResponseCollection']>, ParentType, ContextType, RequireFields<I18NLocaleLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponseCollection'] = ResolversParentTypes['I18NLocaleEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleRelationResponseCollection'] = ResolversParentTypes['I18NLocaleRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  changePassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'currentPassword' | 'password' | 'passwordConfirmation'>>;
  createCliente?: Resolver<Maybe<ResolversTypes['Cliente']>, ParentType, ContextType, RequireFields<MutationCreateClienteArgs, 'data' | 'status'>>;
  createEmpleado?: Resolver<Maybe<ResolversTypes['Empleado']>, ParentType, ContextType, RequireFields<MutationCreateEmpleadoArgs, 'data' | 'status'>>;
  createPilar?: Resolver<Maybe<ResolversTypes['Pilar']>, ParentType, ContextType, RequireFields<MutationCreatePilarArgs, 'data' | 'status'>>;
  createProyecto?: Resolver<Maybe<ResolversTypes['Proyecto']>, ParentType, ContextType, RequireFields<MutationCreateProyectoArgs, 'data' | 'status'>>;
  createReviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType, RequireFields<MutationCreateReviewWorkflowsWorkflowArgs, 'data' | 'status'>>;
  createReviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType, RequireFields<MutationCreateReviewWorkflowsWorkflowStageArgs, 'data' | 'status'>>;
  createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>>;
  createUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>>;
  deleteCliente?: Resolver<Maybe<ResolversTypes['DeleteMutationResponse']>, ParentType, ContextType, RequireFields<MutationDeleteClienteArgs, 'documentId'>>;
  deleteEmpleado?: Resolver<Maybe<ResolversTypes['DeleteMutationResponse']>, ParentType, ContextType, RequireFields<MutationDeleteEmpleadoArgs, 'documentId'>>;
  deletePilar?: Resolver<Maybe<ResolversTypes['DeleteMutationResponse']>, ParentType, ContextType, RequireFields<MutationDeletePilarArgs, 'documentId'>>;
  deleteProyecto?: Resolver<Maybe<ResolversTypes['DeleteMutationResponse']>, ParentType, ContextType, RequireFields<MutationDeleteProyectoArgs, 'documentId'>>;
  deleteReviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes['DeleteMutationResponse']>, ParentType, ContextType, RequireFields<MutationDeleteReviewWorkflowsWorkflowArgs, 'documentId'>>;
  deleteReviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes['DeleteMutationResponse']>, ParentType, ContextType, RequireFields<MutationDeleteReviewWorkflowsWorkflowStageArgs, 'documentId'>>;
  deleteUploadFile?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, 'id'>>;
  deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>>;
  deleteUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'code' | 'password' | 'passwordConfirmation'>>;
  updateCliente?: Resolver<Maybe<ResolversTypes['Cliente']>, ParentType, ContextType, RequireFields<MutationUpdateClienteArgs, 'data' | 'documentId' | 'status'>>;
  updateEmpleado?: Resolver<Maybe<ResolversTypes['Empleado']>, ParentType, ContextType, RequireFields<MutationUpdateEmpleadoArgs, 'data' | 'documentId' | 'status'>>;
  updatePilar?: Resolver<Maybe<ResolversTypes['Pilar']>, ParentType, ContextType, RequireFields<MutationUpdatePilarArgs, 'data' | 'documentId' | 'status'>>;
  updateProyecto?: Resolver<Maybe<ResolversTypes['Proyecto']>, ParentType, ContextType, RequireFields<MutationUpdateProyectoArgs, 'data' | 'documentId' | 'status'>>;
  updateReviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType, RequireFields<MutationUpdateReviewWorkflowsWorkflowArgs, 'data' | 'documentId' | 'status'>>;
  updateReviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType, RequireFields<MutationUpdateReviewWorkflowsWorkflowStageArgs, 'data' | 'documentId' | 'status'>>;
  updateUploadFile?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, 'id'>>;
  updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'data' | 'id'>>;
  updateUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, 'data' | 'id'>>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PilarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pilar'] = ResolversParentTypes['Pilar']> = {
  contacto?: Resolver<ResolversTypes['ComponentComponentsContacto'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  descripcion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  icono?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['Pilar']>>, ParentType, ContextType, RequireFields<PilarLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['PilarRelationResponseCollection']>, ParentType, ContextType, RequireFields<PilarLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  medio?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  nombre?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proyectos?: Resolver<Array<Maybe<ResolversTypes['Proyecto']>>, ParentType, ContextType, RequireFields<PilarProyectosArgs, 'pagination' | 'sort'>>;
  proyectos_connection?: Resolver<Maybe<ResolversTypes['ProyectoRelationResponseCollection']>, ParentType, ContextType, RequireFields<PilarProyectos_ConnectionArgs, 'pagination' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  titular?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PilarEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PilarEntityResponseCollection'] = ResolversParentTypes['PilarEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Pilar']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PilarRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PilarRelationResponseCollection'] = ResolversParentTypes['PilarRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Pilar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProyectoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Proyecto'] = ResolversParentTypes['Proyecto']> = {
  cliente?: Resolver<Maybe<ResolversTypes['Cliente']>, ParentType, ContextType>;
  contenido?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProyectoContenidoDynamicZone']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['Proyecto']>>, ParentType, ContextType, RequireFields<ProyectoLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['ProyectoRelationResponseCollection']>, ParentType, ContextType, RequireFields<ProyectoLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  medio?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
  nombre?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pilar?: Resolver<Maybe<ResolversTypes['Pilar']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProyectoContenidoDynamicZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProyectoContenidoDynamicZone'] = ResolversParentTypes['ProyectoContenidoDynamicZone']> = {
  __resolveType: TypeResolveFn<'ComponentProyectoContenido' | 'ComponentProyectoImagenAnchoCompleto' | 'ComponentProyectoImagenDosColumnas' | 'ComponentProyectoVideo' | 'Error', ParentType, ContextType>;
};

export interface ProyectoContenidoDynamicZoneInputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ProyectoContenidoDynamicZoneInput'], any> {
  name: 'ProyectoContenidoDynamicZoneInput';
}

export type ProyectoEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProyectoEntityResponseCollection'] = ResolversParentTypes['ProyectoEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Proyecto']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProyectoRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProyectoRelationResponseCollection'] = ResolversParentTypes['ProyectoRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['Proyecto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cliente?: Resolver<Maybe<ResolversTypes['Cliente']>, ParentType, ContextType, RequireFields<QueryClienteArgs, 'documentId' | 'status'>>;
  clientes?: Resolver<Array<Maybe<ResolversTypes['Cliente']>>, ParentType, ContextType, RequireFields<QueryClientesArgs, 'pagination' | 'sort' | 'status'>>;
  clientes_connection?: Resolver<Maybe<ResolversTypes['ClienteEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryClientes_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  empleado?: Resolver<Maybe<ResolversTypes['Empleado']>, ParentType, ContextType, RequireFields<QueryEmpleadoArgs, 'documentId' | 'status'>>;
  empleados?: Resolver<Array<Maybe<ResolversTypes['Empleado']>>, ParentType, ContextType, RequireFields<QueryEmpleadosArgs, 'pagination' | 'sort' | 'status'>>;
  empleados_connection?: Resolver<Maybe<ResolversTypes['EmpleadoEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryEmpleados_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  i18NLocale?: Resolver<Maybe<ResolversTypes['I18NLocale']>, ParentType, ContextType, RequireFields<QueryI18NLocaleArgs, 'documentId' | 'status'>>;
  i18NLocales?: Resolver<Array<Maybe<ResolversTypes['I18NLocale']>>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort' | 'status'>>;
  i18NLocales_connection?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryI18NLocales_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
  pilar?: Resolver<Maybe<ResolversTypes['Pilar']>, ParentType, ContextType, RequireFields<QueryPilarArgs, 'documentId' | 'status'>>;
  pilares?: Resolver<Array<Maybe<ResolversTypes['Pilar']>>, ParentType, ContextType, RequireFields<QueryPilaresArgs, 'pagination' | 'sort' | 'status'>>;
  pilares_connection?: Resolver<Maybe<ResolversTypes['PilarEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryPilares_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  proyecto?: Resolver<Maybe<ResolversTypes['Proyecto']>, ParentType, ContextType, RequireFields<QueryProyectoArgs, 'documentId' | 'status'>>;
  proyectos?: Resolver<Array<Maybe<ResolversTypes['Proyecto']>>, ParentType, ContextType, RequireFields<QueryProyectosArgs, 'pagination' | 'sort' | 'status'>>;
  proyectos_connection?: Resolver<Maybe<ResolversTypes['ProyectoEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryProyectos_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  reviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowArgs, 'documentId' | 'status'>>;
  reviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowStageArgs, 'documentId' | 'status'>>;
  reviewWorkflowsWorkflowStages?: Resolver<Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowStagesArgs, 'pagination' | 'sort' | 'status'>>;
  reviewWorkflowsWorkflowStages_connection?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStageEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowStages_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  reviewWorkflowsWorkflows?: Resolver<Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowsArgs, 'pagination' | 'sort' | 'status'>>;
  reviewWorkflowsWorkflows_connection?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflows_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType, RequireFields<QueryUploadFileArgs, 'documentId' | 'status'>>;
  uploadFiles?: Resolver<Array<Maybe<ResolversTypes['UploadFile']>>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort' | 'status'>>;
  uploadFiles_connection?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFiles_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  usersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRoleArgs, 'documentId' | 'status'>>;
  usersPermissionsRoles?: Resolver<Array<Maybe<ResolversTypes['UsersPermissionsRole']>>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort' | 'status'>>;
  usersPermissionsRoles_connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRoles_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
  usersPermissionsUser?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUserArgs, 'documentId' | 'status'>>;
  usersPermissionsUsers?: Resolver<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort' | 'status'>>;
  usersPermissionsUsers_connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsers_ConnectionArgs, 'pagination' | 'sort' | 'status'>>;
};

export type ReviewWorkflowsWorkflowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewWorkflowsWorkflow'] = ResolversParentTypes['ReviewWorkflowsWorkflow']> = {
  contentTypes?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowRelationResponseCollection']>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  stages?: Resolver<Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowStagesArgs, 'pagination' | 'sort'>>;
  stages_connection?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStageRelationResponseCollection']>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowStages_ConnectionArgs, 'pagination' | 'sort'>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewWorkflowsWorkflowEntityResponseCollection'] = ResolversParentTypes['ReviewWorkflowsWorkflowEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewWorkflowsWorkflowRelationResponseCollection'] = ResolversParentTypes['ReviewWorkflowsWorkflowRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewWorkflowsWorkflowStage'] = ResolversParentTypes['ReviewWorkflowsWorkflowStage']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowStageLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStageRelationResponseCollection']>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowStageLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  workflow?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewWorkflowsWorkflowStageEntityResponseCollection'] = ResolversParentTypes['ReviewWorkflowsWorkflowStageEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewWorkflowsWorkflowStageRelationResponseCollection'] = ResolversParentTypes['ReviewWorkflowsWorkflowStageRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = {
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['UploadFile']>>, ParentType, ContextType, RequireFields<UploadFileLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFileLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponseCollection'] = ResolversParentTypes['UploadFileEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileRelationResponseCollection'] = ResolversParentTypes['UploadFileRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = {
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['UsersPermissionsPermission']>>, ParentType, ContextType, RequireFields<UsersPermissionsPermissionLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsPermissionLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['UsersPermissionsRole']>>, ParentType, ContextType, RequireFields<UsersPermissionsRoleLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<Maybe<ResolversTypes['UsersPermissionsPermission']>>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>>;
  permissions_connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissions_ConnectionArgs, 'pagination' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  users?: Resolver<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>>;
  users_connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsers_ConnectionArgs, 'pagination' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>, ParentType, ContextType, RequireFields<UsersPermissionsUserLocalizationsArgs, 'pagination' | 'sort'>>;
  localizations_connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsUserLocalizations_ConnectionArgs, 'pagination' | 'sort'>>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponse'] = ResolversParentTypes['UsersPermissionsUserEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsUserEntityResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsUserRelationResponseCollection']> = {
  nodes?: Resolver<Array<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cliente?: ClienteResolvers<ContextType>;
  ClienteEntityResponseCollection?: ClienteEntityResponseCollectionResolvers<ContextType>;
  ClienteRelationResponseCollection?: ClienteRelationResponseCollectionResolvers<ContextType>;
  ComponentComponentsContacto?: ComponentComponentsContactoResolvers<ContextType>;
  ComponentComponentsFormulario?: ComponentComponentsFormularioResolvers<ContextType>;
  ComponentProyectoContenido?: ComponentProyectoContenidoResolvers<ContextType>;
  ComponentProyectoImagenAnchoCompleto?: ComponentProyectoImagenAnchoCompletoResolvers<ContextType>;
  ComponentProyectoImagenDosColumnas?: ComponentProyectoImagenDosColumnasResolvers<ContextType>;
  ComponentProyectoVideo?: ComponentProyectoVideoResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteMutationResponse?: DeleteMutationResponseResolvers<ContextType>;
  Empleado?: EmpleadoResolvers<ContextType>;
  EmpleadoEntityResponseCollection?: EmpleadoEntityResponseCollectionResolvers<ContextType>;
  EmpleadoRelationResponseCollection?: EmpleadoRelationResponseCollectionResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  GenericMorph?: GenericMorphResolvers<ContextType>;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
  I18NLocaleRelationResponseCollection?: I18NLocaleRelationResponseCollectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Pilar?: PilarResolvers<ContextType>;
  PilarEntityResponseCollection?: PilarEntityResponseCollectionResolvers<ContextType>;
  PilarRelationResponseCollection?: PilarRelationResponseCollectionResolvers<ContextType>;
  Proyecto?: ProyectoResolvers<ContextType>;
  ProyectoContenidoDynamicZone?: ProyectoContenidoDynamicZoneResolvers<ContextType>;
  ProyectoContenidoDynamicZoneInput?: GraphQLScalarType;
  ProyectoEntityResponseCollection?: ProyectoEntityResponseCollectionResolvers<ContextType>;
  ProyectoRelationResponseCollection?: ProyectoRelationResponseCollectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReviewWorkflowsWorkflow?: ReviewWorkflowsWorkflowResolvers<ContextType>;
  ReviewWorkflowsWorkflowEntityResponseCollection?: ReviewWorkflowsWorkflowEntityResponseCollectionResolvers<ContextType>;
  ReviewWorkflowsWorkflowRelationResponseCollection?: ReviewWorkflowsWorkflowRelationResponseCollectionResolvers<ContextType>;
  ReviewWorkflowsWorkflowStage?: ReviewWorkflowsWorkflowStageResolvers<ContextType>;
  ReviewWorkflowsWorkflowStageEntityResponseCollection?: ReviewWorkflowsWorkflowStageEntityResponseCollectionResolvers<ContextType>;
  ReviewWorkflowsWorkflowStageRelationResponseCollection?: ReviewWorkflowsWorkflowStageRelationResponseCollectionResolvers<ContextType>;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
  UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
  UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsRoleRelationResponseCollection?: UsersPermissionsRoleRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
  UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
};

