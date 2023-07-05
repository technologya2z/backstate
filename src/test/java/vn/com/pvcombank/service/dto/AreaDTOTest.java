package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class AreaDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(AreaDTO.class);
        AreaDTO areaDTO1 = new AreaDTO();
        areaDTO1.setId(1L);
        AreaDTO areaDTO2 = new AreaDTO();
        assertThat(areaDTO1).isNotEqualTo(areaDTO2);
        areaDTO2.setId(areaDTO1.getId());
        assertThat(areaDTO1).isEqualTo(areaDTO2);
        areaDTO2.setId(2L);
        assertThat(areaDTO1).isNotEqualTo(areaDTO2);
        areaDTO1.setId(null);
        assertThat(areaDTO1).isNotEqualTo(areaDTO2);
    }
}
