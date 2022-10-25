import { useAppSelector } from '@/redux/hooks';

export default function useCheckBookmarks(url: string) {
  const { bookmarks } = useAppSelector(({ bookmarks }) => bookmarks);
  const saved = !!bookmarks.filter((bookmark) => bookmark.url === url).length;

  return { saved };
}
