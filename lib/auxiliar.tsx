import { MenusMenuItemEntity } from "@/gql/graphql";

export interface MenuItem {
  item: MenusMenuItemEntity;
  children: MenusMenuItemEntity[];
}

const getHierarchicalItems = (data: MenusMenuItemEntity[] = []) => {
  const tree: MenuItem[] = [];
  const childrenOf: any = {};
  data.forEach((item) => {
    const id = item.id || "";
    const parentId = item.attributes?.parent?.data?.id;

    childrenOf[id] = childrenOf[id] || [];

    const newItem: MenuItem = {
      item: item,
      children: childrenOf[id],
    };

    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
};

export { getHierarchicalItems };

export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  // first prevent the default behavior
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};
