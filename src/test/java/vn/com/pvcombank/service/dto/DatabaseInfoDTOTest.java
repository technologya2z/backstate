package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class DatabaseInfoDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(DatabaseInfoDTO.class);
        DatabaseInfoDTO databaseInfoDTO1 = new DatabaseInfoDTO();
        databaseInfoDTO1.setId(1L);
        DatabaseInfoDTO databaseInfoDTO2 = new DatabaseInfoDTO();
        assertThat(databaseInfoDTO1).isNotEqualTo(databaseInfoDTO2);
        databaseInfoDTO2.setId(databaseInfoDTO1.getId());
        assertThat(databaseInfoDTO1).isEqualTo(databaseInfoDTO2);
        databaseInfoDTO2.setId(2L);
        assertThat(databaseInfoDTO1).isNotEqualTo(databaseInfoDTO2);
        databaseInfoDTO1.setId(null);
        assertThat(databaseInfoDTO1).isNotEqualTo(databaseInfoDTO2);
    }
}
