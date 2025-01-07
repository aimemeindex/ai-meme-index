export const sharedMemory = new Map<string, any>();

export function setMemory(key: string, value: any) {
  sharedMemory.set(key, value);
}

export function getMemory(key: string) {
  return sharedMemory.get(key);
}
