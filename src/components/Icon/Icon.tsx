import type { LucideProps } from 'lucide-react';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUp,
  Bookmark, Calendar, Check,
  ChevronDown, ChevronLeft, ChevronRight, ChevronUp,
  Circle, CircleAlert, CircleCheck,
  Download, Funnel, Handbag, Info,
  Mail, MapPin, Menu, Minus, Plus,
  Search, Send, Settings, Settings2,
  ShoppingCart, Sparkles, SquareArrowOutUpRight,
  Tag, Trash2, TriangleAlert, User, X,
  ZoomIn, ZoomOut,
} from 'lucide-react';
import styles from './Icon.module.css';

export type IconName =
  | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up'
  | 'bookmark' | 'calendar' | 'check'
  | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up'
  | 'circle' | 'circle-alert' | 'circle-check'
  | 'download' | 'funnel' | 'handbag' | 'info'
  | 'mail' | 'map-pin' | 'menu' | 'minus' | 'plus'
  | 'search' | 'send' | 'settings' | 'settings-2'
  | 'shopping-cart' | 'sparkles' | 'square-arrow-out-up-right'
  | 'tag' | 'trash-2' | 'triangle-alert' | 'user' | 'x'
  | 'zoom-in' | 'zoom-out';

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  'arrow-down': ArrowDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'bookmark': Bookmark,
  'calendar': Calendar,
  'check': Check,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'circle': Circle,
  'circle-alert': CircleAlert,
  'circle-check': CircleCheck,
  'download': Download,
  'funnel': Funnel,
  'handbag': Handbag,
  'info': Info,
  'mail': Mail,
  'map-pin': MapPin,
  'menu': Menu,
  'minus': Minus,
  'plus': Plus,
  'search': Search,
  'send': Send,
  'settings': Settings,
  'settings-2': Settings2,
  'shopping-cart': ShoppingCart,
  'sparkles': Sparkles,
  'square-arrow-out-up-right': SquareArrowOutUpRight,
  'tag': Tag,
  'trash-2': Trash2,
  'triangle-alert': TriangleAlert,
  'user': User,
  'x': X,
  'zoom-in': ZoomIn,
  'zoom-out': ZoomOut,
};

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  size?: number;
  'aria-label'?: string;
}

export function Icon({
  name,
  size = 24,
  className,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  const LucideIcon = ICON_MAP[name];

  return (
    <LucideIcon
      size={size}
      className={[styles.icon, className].filter(Boolean).join(' ')}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      {...props}
    />
  );
}
