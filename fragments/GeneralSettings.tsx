export const MenuItemsFragment = `
  data {
    id
    attributes {
      title
      url
      target
      parent{
        data{
          id
        }
      }
      root_menu {
        data {
          id
          attributes {
            slug
          }
        }
      }
    }
  }
`;

export const ImageFragment = `
  data {
    attributes {
      url
      width
      height
      alternativeText
      mime
    }
  }
`;

export const CTAFragment = `
  cta{
    texto
    uri
    target
  }
`;

export const SectionFragment = `
  titulo
  texto
  medio {
    ${ImageFragment}
  }
  ${CTAFragment}
`;

export const EspecialistaFragment = `
data{
  attributes{
    nombre
    slug
    foto{
      ${ImageFragment}
    }
    especialidades{
      data{
        attributes{
          nombre
          slug
        }
      }
    }
    sucursales{
      data{
        attributes{
          nombre
          slug
        }
      }
    }
  }
}
`;

export const TelefonoFragment = `
  numero
  extension{
    numero
  }
`;
