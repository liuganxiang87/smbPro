export class AnnalsPartyBuildModel {
  public annal_id: number;  // 对应年报记录ID
  public party_num: number;  // 中共党员（包括预备党员）人数
  public party_system: number;  // 党组织建制（1：党委，2：党总支，3：党支部，4：未成立党组织）
  public controller_is_party_member: string;  // 执行事务合伙人（投资人、负责人）是否为党员（T：是，F：否）
  public controller_is_party_secretary: string;  // 执行事务合伙人（投资人、负责人）是否为党组织书记（T：是，F：否）
  public created_at: number;  // 创建时间
  public updated_at: number;  // 更新时间
}
