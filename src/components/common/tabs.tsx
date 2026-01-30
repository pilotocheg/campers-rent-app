import clsx from 'clsx';

interface TabsProps {
  tabs: string[];
  onTabChange: (tab: string) => void;
  activeTab: string;
  className?: string;
}

export default function Tabs({
  tabs,
  onTabChange,
  activeTab,
  className,
}: TabsProps) {
  return (
    <div className={clsx('border-border flex gap-10 border-b', className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={clsx(
            'hover:border-primary-hover relative z-10 -mb-[3px] border-b-[5px] pb-6 text-xl leading-6 font-semibold capitalize transition-colors duration-300 first-letter:uppercase',
            activeTab === tab ? 'border-primary' : 'border-transparent',
          )}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
