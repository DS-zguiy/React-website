/**
 * 泛型字典类
 * let dictionary = new Dictionary<string>(); // new一个对象
 * // 设置属性
 * dictionary.Set('gandalf', 'gandalf@email.com');
 * dictionary.Set('john', 'johnsnow@email.com');
 * dictionary.Set('tyrion', 'tyrion@email.com');
 * // 调用
 * console.log(dictionary.Size());
 * console.log(dictionary.Values());
 * console.log(dictionary.Get('tyrion'));
 */
export class Dictionary<T> {
  /**
   * 字典项目
   */
  private items: any = {}

  /**
   * 验证指定键是否在字典中
   * @param key 键
   * @returns 是否存在
   */
  public Has(key: string): boolean {
    return key in this.items
  }

  /**
   * 设置键值
   * @param key 键
   * @param value 值
   */
  public Set(key: string, value: T): void {
    this.items[key] = value
  }

  /**
   * 移除指定键
   * @param key 键
   * @returns 是否移除成功
   */
  public Remove(key: string): boolean {
    if (this.Has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  /**
   * 查找特定键的值
   * @param key 键
   * @returns 值
   */
  public Get(key: string): T {
    return this.Has(key) ? this.items[key] : undefined
  }

  /**
   * 获取字典所有的键
   * @returns 键数组
   */
  public Keys(): Array<string> {
    const values = new Array<string>() //存到数组中返回
    for (const k in this.items) {
      if (this.Has(k)) {
        values.push(this.items[k])
      }
    }
    return values
  }

  /**
   * 获取字典所有的值
   * @returns 值数组
   */
  public Values(): Array<T> {
    // 存到数组中返回
    const values = new Array<T>()
    for (const k in this.items) {
      if (this.Has(k)) {
        values.push(this.items[k])
      }
    }
    return values
  }

  /**
   * 获取所有键值
   * @returns 键值对对象
   */
  public GetItems(): object {
    return this.items
  }

  /**
   * 清空字典
   */
  public Clear(): void {
    this.items = {}
  }

  /**
   * 获取字典大小
   * @returns
   */
  public Size(): number {
    return Object.keys(this.items).length
  }
}
