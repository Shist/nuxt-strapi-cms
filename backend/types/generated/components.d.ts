import type { Schema, Struct } from '@strapi/strapi';

export interface CommonArticlesBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_articles_blocks';
  info: {
    displayName: 'Articles Block';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_info_blocks';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    btnLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    isBtnType: Schema.Attribute.Boolean;
    leftLinkImg: Schema.Attribute.Media<'images'>;
    rightLinkImg: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonIntroBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_intro_blocks';
  info: {
    displayName: 'Intro Block';
  };
  attributes: {
    btnLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    isBtnNeeded: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface CommonLocationsBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_locations_blocks';
  info: {
    displayName: 'Locations Block';
  };
  attributes: {
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    searchBtnLabel: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonPartnersBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_partners_blocks';
  info: {
    displayName: 'Partners Block';
  };
  attributes: {
    partners: Schema.Attribute.Relation<'oneToMany', 'api::partner.partner'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonServicesBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_services_blocks';
  info: {
    displayName: 'Services Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface HeaderPagesList extends Struct.ComponentSchema {
  collectionName: 'components_header_pages_lists';
  info: {
    displayName: 'Pages List';
  };
  attributes: {
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface HeaderPagesNavigation extends Struct.ComponentSchema {
  collectionName: 'components_header_pages_navigations';
  info: {
    displayName: 'Pages Navigation';
  };
  attributes: {
    name: Schema.Attribute.String;
    pagesList: Schema.Attribute.Component<'header.pages-list', true>;
    path: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.articles-block': CommonArticlesBlock;
      'common.info-block': CommonInfoBlock;
      'common.intro-block': CommonIntroBlock;
      'common.locations-block': CommonLocationsBlock;
      'common.partners-block': CommonPartnersBlock;
      'common.services-block': CommonServicesBlock;
      'header.pages-list': HeaderPagesList;
      'header.pages-navigation': HeaderPagesNavigation;
    }
  }
}
