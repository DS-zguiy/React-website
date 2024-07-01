import { useState, useEffect,  ComponentType } from 'react';
import * as Icons from 'react-icons/pi';

interface IconProps {
  icon: string;
  size?: number;
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

const IconComponent: React.FC<IconProps> = ({ icon, size = 12, onClick }) => {
  const [Icon, setIcon] = useState<ComponentType<{ size: number; color: string }> | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        // 使用映射对象来动态获取图标组件
        const ImportedIcon = (Icons as { [key: string]: ComponentType<{ size: number; color: string }> })[icon];
        if (ImportedIcon) {
          setIcon(() => ImportedIcon);
        } else {
          console.error(`图标 ${icon} 不存在`);
          setIcon(null);
        }
      } catch (error) {
        console.error(`图标 ${icon} 加载失败`, error);
        setIcon(null);
      }
    };

    loadIcon();
  }, [icon]);

  return Icon ? (
    <div className='icon-center' onClick={(ev) => { onClick&&onClick(ev) }} style={{ display: 'inline-block', cursor: 'pointer' }}>
      <Icon size={size} color="currentColor" />
    </div>
  ) : null;
};

export default IconComponent;
