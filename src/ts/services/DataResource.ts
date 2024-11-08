export class DataResource<T> {
  constructor(private endpoint: string) {}

  async loadAll(): Promise<T[]> {
    const response = await fetch(this.endpoint);
    
    return response.json();
  }
  async loadOne(id: number): Promise<T> {
    const response = await fetch(`${this.endpoint}/${id}`);

    return response.json();
  }
  async delete(id: number) {}
  async save(data: T) {}
}
