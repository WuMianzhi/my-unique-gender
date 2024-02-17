import { GenderGroup } from "@/types/index";

/**
 * 更新数据
 * @param index
 * @param val
 * @param ds
 * @returns
 */
export const updateVal = (index: number, val: number, ds: GenderGroup) =>
  (ds.category[index].value = val);

/**
 * 根据参数来修改数值，可输入正数或者负数
 * @param index 要改变的 index
 * @param mod 变化数
 * @param ds 在的组
 */
export const updateValByMod = (index: number, mod: number, ds: GenderGroup) => {
  const res = ds.category[index].value + mod;
  res < 101 && res > 0 ? (ds.category[index].value += mod) : null;
};
