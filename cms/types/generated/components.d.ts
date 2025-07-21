import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContact extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.icon-blocks', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCourse extends Struct.ComponentSchema {
  collectionName: 'components_blocks_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    courses: Schema.Attribute.Component<'components.course-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    FaqItem: Schema.Attribute.Component<'components.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeaderBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_header_banners';
  info: {
    displayName: 'Header Banner';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.social-media-link', true>;
    mail: Schema.Attribute.Email;
    quote: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    groups: Schema.Attribute.Component<'components.pricing-group', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    paragraphs: Schema.Attribute.Component<
      'components.paragraph-with-image',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTeam extends Struct.ComponentSchema {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    teamMembers: Schema.Attribute.Component<'components.team-member', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.testimonial-item', true>;
  };
}

export interface BlocksWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_uses';
  info: {
    displayName: 'Why Us';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.why-us-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    style: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsCourseItem extends Struct.ComponentSchema {
  collectionName: 'components_components_course_items';
  info: {
    displayName: 'Course Item';
  };
  attributes: {
    date: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Category: Schema.Attribute.Enumeration<
      ['Algemeen', 'Personal Training', 'WOD']
    >;
    Question: Schema.Attribute.String;
  };
}

export interface ComponentsIconBlocks extends Struct.ComponentSchema {
  collectionName: 'components_components_icon_blocks';
  info: {
    displayName: 'Icon Blocks';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_components_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    link: Schema.Attribute.Component<'components.link', false>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_components_paragraph_with_images';
  info: {
    displayName: 'Paragraph With Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsPricingGroup extends Struct.ComponentSchema {
  collectionName: 'components_components_pricing_groups';
  info: {
    displayName: 'Pricing Group';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.pricing-group-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsPricingGroupItem extends Struct.ComponentSchema {
  collectionName: 'components_components_pricing_group_items';
  info: {
    displayName: 'Pricing Group Item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
    price: Schema.Attribute.Integer;
    time: Schema.Attribute.String;
  };
}

export interface ComponentsSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_components_social_media_links';
  info: {
    displayName: 'Social Media Link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_components_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    jobTitle: Schema.Attribute.String;
    name: Schema.Attribute.String;
    socialMediaLinks: Schema.Attribute.Component<
      'components.social-media-link',
      true
    >;
  };
}

export interface ComponentsTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
  };
  attributes: {
    date: Schema.Attribute.Date;
    name: Schema.Attribute.String;
    stars: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    text: Schema.Attribute.Text;
  };
}

export interface ComponentsWhyUsItem extends Struct.ComponentSchema {
  collectionName: 'components_components_why_us_items';
  info: {
    displayName: 'Why Us Item';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact': BlocksContact;
      'blocks.course': BlocksCourse;
      'blocks.faq': BlocksFaq;
      'blocks.gallery': BlocksGallery;
      'blocks.header-banner': BlocksHeaderBanner;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.section': BlocksSection;
      'blocks.team': BlocksTeam;
      'blocks.testimonial': BlocksTestimonial;
      'blocks.why-us': BlocksWhyUs;
      'components.button': ComponentsButton;
      'components.course-item': ComponentsCourseItem;
      'components.faq-item': ComponentsFaqItem;
      'components.icon-blocks': ComponentsIconBlocks;
      'components.link': ComponentsLink;
      'components.paragraph': ComponentsParagraph;
      'components.paragraph-with-image': ComponentsParagraphWithImage;
      'components.pricing-group': ComponentsPricingGroup;
      'components.pricing-group-item': ComponentsPricingGroupItem;
      'components.social-media-link': ComponentsSocialMediaLink;
      'components.team-member': ComponentsTeamMember;
      'components.testimonial-item': ComponentsTestimonialItem;
      'components.why-us-item': ComponentsWhyUsItem;
    }
  }
}
