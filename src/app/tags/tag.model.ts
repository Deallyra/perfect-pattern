export class Tag {
  public tag_id: number;
  public tag_label: string;
  public tag_short_url: string;

  constructor( tag_id: number, tag_label: string, tag_short_url: string) {
    this.tag_id = tag_id;
    this.tag_label = tag_label;
    this.tag_short_url = tag_short_url;
  }
}
