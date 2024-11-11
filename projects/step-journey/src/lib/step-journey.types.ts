export interface Step {
    label: string;
    subLabel?: string;
    status: 'completed' | 'current' | 'pending';
    color?: string;
    tooltipText?: string;
}
  
export interface ColorConfig {
    completed: string;
    current: string;
    pending: string;
}
  